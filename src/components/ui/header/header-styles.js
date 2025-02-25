import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get("window");

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
        height: height * 0.05,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 14,
        alignItems: 'center',
    },
});

