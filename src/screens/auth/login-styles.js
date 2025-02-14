import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: '#fff' },

    image: {
        height: height * 0.4, // 40% of the screen height
    },

    bottomView: {
        paddingHorizontal: width * 0.05, // 5% of screen width
    },

    text: {
        fontSize: width * 0.05, // Dynamic font size
        fontWeight: 'bold',
        color: '#000',
    },

    subText: {
        fontSize: width * 0.04,
        color: 'black',
        opacity: 0.7,
        paddingVertical: 10,
    },

    button: {
        marginTop: 21,
        backgroundColor: '#007bff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.06, // 7% of screen height
        width: width * 0.9,  // 90% of screen width
    },

    buttonText: {
        color: '#fff',
        fontSize: width * 0.04, // Responsive font
    },

    loginInput: {
        height: height * 0.05, // 8% of screen height
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 100,
        fontSize: width * 0.040, // Responsive font
        backgroundColor: '#F8F8F8',
        borderColor: '#F8F8F8',
    },

    pinCodeContainer: {
        borderWidth: 1,
        borderColor: '#F8F8F8',
        backgroundColor: '#F8F8F8',
        width: width * 0.12, // 12% of screen width
        marginVertical: 10,
    },

    pinCodeText: {
        fontSize: width * 0.045,
    },
});
