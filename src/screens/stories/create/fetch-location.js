import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { createStoryStyles, mediaStyles } from './create-story-styles';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    enableBackgroundLocationUpdates: true,
    locationProvider: 'playServices',
});

const FetchLocation = ({ form }) => {
    const [location, setLocation] = useState(null);
    const [load, setLoad] = useState();

    // 🔹 Request Location Permission
    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
            const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            return result === RESULTS.GRANTED;
        }
    };

    // 🔹 Fetch Live Location
    const getLiveLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
            Alert.alert('Permission Denied', 'Please enable location permissions.');
            return;
        }

        setLoad(true);
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                form.change('location', { lat: latitude, lng: longitude });
                setLocation({ latitude, longitude });
                setLoad(false);
            },
            (error) => {
                setLoad(false);
                Alert.alert('Error', `Failed to get location: ${error.message}`);
                console.error(error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000, forceLocationManager: true }
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
                <TouchableOpacity disabled={load} onPress={getLiveLocation} style={{ ...mediaStyles.mediaBtn, opacity: load && '0.7' }}>
                    {load && <ActivityIndicator color='#fff' />}
                    <Text style={mediaStyles.mediaBtnTxt}>Get Live Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FetchLocation;
