import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ReportsScreen = ({ navigation }) => {

  const onLogout = async () => {
    await AsyncStorage.removeItem('user');
    setTimeout(() => {
        navigation.replace('Auth');
    }, 100);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reports Section</Text>
      <View>
          <Button title="Logout" onPress={onLogout} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});

export default ReportsScreen;
