import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {Commonheader, ErrorApi, Spinner} from '../../../components';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from '@tanstack/react-query';
import {storyListStyles} from './story-list-styles';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const StoryListScreen = ({navigation}) => {
  const {data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['story-list'], // Unique key for caching
    queryFn: fetchData, // Function to fetch data
  });

  function buildRightHeader() {
    return (
      <View>
        <Icon
          name="add-circle"
          size={31}
          color="#000"
          onPress={() => navigation.navigate('StoriesCreate')}
        />
      </View>
    );
  }

  console.log({data});
  return (
    <View style={storyListStyles.container}>
      <Commonheader children={buildRightHeader()} />
      <View style={storyListStyles.listContainer}>
        {(isLoading || isFetching) && <Spinner text='Fetching Stories, Please wait..' />}
        {(error && !isFetching) && <ErrorApi
              text='Something went wrong, please try again.'
              reload={refetch}
        />}
        {data?.success && (
          <FlatList
            data={data?.data || []}
            keyExtractor={item => item.id.toString()}
            // onRefresh={refetch}
            refreshing={isFetching}
            renderItem={({item}) => {
              const formattedDate = new Date(item.createdOn).toLocaleString(
                'en-US',
                {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                },
              );
              return (
                <View
                  style={{
                    ...storyListStyles.listItem,
                    borderLeftColor: 'green',
                  }}>
                  <View style={storyListStyles.flexBox}>
                    <Text style={storyListStyles.title}>{item.title}</Text>
                    <View
                      style={{
                        ...storyListStyles.statusView,
                        backgroundColor: getStatusColor(item.status),
                      }}>
                      <Text style={storyListStyles.statusText}>
                        {item.status}
                      </Text>
                    </View>
                  </View>
                  <View style={storyListStyles.flexBox}>
                    <View style={storyListStyles.flex2}>
                      <View style={storyListStyles.flex2}>
                        <Icon2 name="image" size={20} color={item.images.length ?'green' : 'grey'} />
                        <Text>{item.images.length} Images </Text>
                      </View>
                      <Text>|</Text>
                      <View style={storyListStyles.flex2}>
                        <Icon2 name="video-box" size={20} color={item.videos.length ?'green' : 'grey'} />
                        <Text>{item.videos.length} Videos </Text>
                      </View>
                    </View>
                    <Text style={storyListStyles.date}>{formattedDate}</Text>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const getStatusColor = type =>
  ({
    DRAFT: 'grey',
    SUCCESS: 'green',
    'IN PROGRESS': 'yellow',
  }[type] ?? '');

const fetchData = async () => {
  const response = await axios.get('http://65.2.116.173:8080/api/get/story');
  return response.data;
};

export default StoryListScreen;
