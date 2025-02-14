import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Commonheader } from '../../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StoryListScreen = ({ navigation }) => {

  function buildRightHeader() {
    return (
      <View>
        <Icon name="add-circle" size={31} color="#000" onPress={() => navigation.navigate('StoriesCreate')} />
      </View>
    );
  }

  const onLogout = async () => {
    await AsyncStorage.removeItem('user');
    setTimeout(() => {
        navigation.replace('Auth');
    }, 100);
  };

  return (
    <View style={styles.container}>
        <Commonheader
          children={buildRightHeader()}
        />
        <Text>ewrf</Text>
        <View>
          <Button title="Logout" onPress={onLogout} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});

export default StoryListScreen;
