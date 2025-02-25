import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("window");

export const createStoryStyles = StyleSheet.create({
    outerView: {
        // backgroundColor: 'lightgreen',
        // borderWidth: 1,
        height
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headertext: {
        color: '#000',
        fontSize: width * 0.040,
        fontWeight: 'bold',
    },
    mainContainer: {
        paddingVertical: width * 0.03,
        height: height - (height * 0.1),
        // backgroundColor: 'pink'
    },
    formContainer: {
        flex: 1,
        // backgroundColor: 'yellow'
    },
    topView: {
        paddingHorizontal: width * 0.03
    },
    buttonView: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        gap: width * 0.03,
        paddingTop: width * 0.03,
        // backgroundColor: 'white'
    },
    button: {
        paddingHorizontal: width * 0.03,
        backgroundColor: '#007bff',
        borderRadius: width * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.05,
        minWidth: width * 0.45,
    },
    draftBtn: {
        backgroundColor: 'grey',
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.038,
    },
    label: {
        marginBottom: height * 0.005,
        color: '#000',
        opacity: 0.7,
    },
    heading: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: width * 0.040,
        marginBottom: height * 0.005,
    },
    subHeading: {
        color: '#000',
        opacity: 0.7,
        marginBottom: height * 0.005,
    },
});

export const mediaStyles = StyleSheet.create({
    container: {
        // borderWidth: 1
        // paddingBottom: height * 0.02,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.005,
    },
    leftHeaderAttach: {
        backgroundColor: '#fff',
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.007,
        borderRadius: width * 0.015,
        flex: 1,
        marginRight: width * 0.025
    },
    mediaBtn: {
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.007,
        backgroundColor: '#007bff',
        borderRadius: width * 0.015,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 3
    },
    mediaBtnTxt: {
        color: '#fff',
        fontSize: width * 0.032,
    },
    mediaContainer: {
        marginBottom: height * 0.01
    },
    loadImages: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: width * 0.015,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    loadTxt: {
        fontSize: width * 0.025,
        textAlign: 'center',
        color: global.colors.error
    },
    mediaItem: {
        position: 'relative',
        marginRight: width * 0.025,
        paddingBottom: height * 0.015,
    },
    mediaThumbnail: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: width * 0.015,
    },
    attachItem: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        marginVertical: width * 0.01,
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: width * 0.01,
        paddingHorizontal: width * 0.011,
        borderRadius: width * 0.01
    },
    attachItemLeft: {
        flexDirection: 'row', alignItems: 'center',
        gap: width * 0.01
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)", // Dark overlay
        justifyContent: "center",
        alignItems: "center",
        borderRadius: width * 0.015,
        height: width * 0.18,
        // borderWidth: 1
      },
      playButton: {
        color: "rgba(255,255,255,0.7)",
        justifyContent: "center",
        alignItems: "center",
      },
      deleteButton: {
        position: "absolute",
        top: width * 0.005,
        right: width * 0.005,
        backgroundColor: "rgba(0,0,0,0.8)",
        width: width * 0.04,
        height: width * 0.04,
        borderRadius: width * 0.025,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
      },
});

export const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1, backgroundColor: "#fff", height
    },
    modalTop: {
        height: height * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: height * 0.01,
        paddingHorizontal: height * 0.01,
        borderColor: '#D5D5D5',
        borderBottomWidth: 1,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: height * 0.01,
    },
    circle: {
        width: height * 0.022,
        height: height * 0.022,
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D5D5D5',
        backgroundColor: '#F3F3F3'
    },
    imageName: {
        color: '#000',
        fontWeight: 500
    },
    modalMain: {
        height: height * 0.9,
        justifyContent: 'center',
        // backgroundColor: 'pink',
        paddingHorizontal: height * 0.01
    },
    previwImage: {
        resizeMode: 'contain',
        width: width - (height * 0.02),
        height: height * 0.9,
        borderRadius: 4,
        // borderWidth: 1
    }
})

