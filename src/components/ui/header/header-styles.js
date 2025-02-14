import { StyleSheet } from 'react-native';

export const commonHeaderStyles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 80,
    },
});

export const goBackHeaderStyles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        height: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 14,
        alignItems: 'center',
    },
});

