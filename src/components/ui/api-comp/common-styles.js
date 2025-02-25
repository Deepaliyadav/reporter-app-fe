import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("window");

export const spinnerStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 10,
        alignItems: 'center',
        height: height - (height * 0.1),
        gap: height * 0.005
    },
    text: {
        fontSize: height * 0.016,
        fontWeight: 500
    },
});

export const errorApiStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 10,
        alignItems: 'center',
        height: height - (height * 0.1),
        gap: height * 0.013,
    },
    text: {
        fontSize: height * 0.016,
        fontWeight: 500,
        color: global.colors.error,
        opacity: 0.7,
        textAlign: 'center'
    },
    reloadbtn: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.008,
        backgroundColor: '#007bff',
        borderRadius: width * 0.01,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reloadbtnTxt: {
        color: '#fff',
        fontSize: width * 0.032,
    },
});

