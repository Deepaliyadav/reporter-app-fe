import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { createStoryStyles, mediaStyles } from './create-story-styles';
// Geolocation.setRNConfiguration(config);

// import Geolocation from 'react-native-geolocation-service';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// // 🔹 Replace with your Google Places API Key
// const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_API_KEY';

const FetchLocation = ({ form }) => {
    const [location, setLocation] = useState(null);

    // 🔹 Fetch Live Location
    const getLiveLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                form.change('location', { lat: latitude, lng: longitude });
                setLocation({ latitude, longitude });
            },
            (error) => {
                Alert.alert('Error', 'Failed to get location. Please enable GPS.');
                console.error(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };


    return (
        <View style={{ ...mediaStyles.container, marginBottom: 10 }}>
            <Text style={createStoryStyles.subHeading}>Location</Text>
            <View style={mediaStyles.headerView}>
                <View style={mediaStyles.leftHeaderAttach}>
                {location ? (
                    <Text>
                        {location.latitude}, {location.longitude}
                    </Text>
                ) : <Text>Live Location</Text>}
                </View>
                <TouchableOpacity onPress={getLiveLocation} style={mediaStyles.mediaBtn}>
                    <Text style={mediaStyles.mediaBtnTxt}>Get Live Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FetchLocation;
