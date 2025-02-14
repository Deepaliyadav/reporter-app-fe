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
        width: 180,
    },
    draftBtn: {
        backgroundColor: 'grey',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    label: {
        marginBottom: 5,
        color: '#000',
        opacity: 0.7,
    },
    heading: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    subHeading: {
        color: '#000',
        opacity: 0.7,
        marginBottom: 10,
    },
});

export const mediaStyles = StyleSheet.create({
    container: {
        // borderWidth: 1
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    leftHeaderAttach: {
        backgroundColor: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10
    },
    mediaBtn: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#007bff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mediaBtnTxt: {
        color: '#fff',
        fontSize: 15,
    },
    mediaContainer: {
        marginBottom: 10
    },
    mediaItem: {
        position: 'relative',
        marginRight: 10,
        paddingBottom: 10,
    },
    mediaThumbnail: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    deleteBtn: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 15,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteBtnText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    attachItem: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5,
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: 5,
        paddingHorizontal: 6,
        borderRadius: 4
    },
    attachItemLeft: {
        flexDirection: 'row', alignItems: 'center',
        gap: 5
    }
});

