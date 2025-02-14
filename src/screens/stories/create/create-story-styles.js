import { StyleSheet } from 'react-native';

export const createStoryStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headertext: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
    },
    mainContainer: {
        padding: 10,
    },
    formContainer: {
        flex: 1,
    },
    topView: {
    },
    buttonView: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        paddingHorizontal: 12,
        backgroundColor: '#007bff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 180
    },
    draftBtn: {
        backgroundColor: 'grey'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    label: {
        marginBottom: 5,
        color: '#000',
        opacity: 0.7
    },
    heading: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4
    },
    subHeading: {
        color: '#000',
        opacity: 0.7,
        marginBottom: 10,
    }
});

