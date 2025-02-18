import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("window");

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
        paddingBottom: 10
    },
    mediaThumbnail: {
        width: 100,
        height: 100,
        borderRadius: 10,
    //     width: "100%",
    // height: 200,
    // borderRadius: 10,
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
        borderRadius: 15,   
        height: 100
        // borderWidth: 1
      },
      playButton: {
        color: "rgba(255,255,255,0.7)",
        justifyContent: "center",
        alignItems: "center",
      },
      playText: {
        fontSize: 30,
        color: "black",
      },
      deleteButton: {
        position: "absolute",
        top: 4,
        right: 4,
        backgroundColor: "rgba(0,0,0,0.8)",
        width: 20,
        height: 20,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      },
});

export const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.8)", height
    },
    modalTop: {
        height: height - 100,
        justifyContent: 'center'
    },
    closebtn: {
        height: 100
    },
    previwImage: {
        resizeMode: 'contain',
        width,
        height
      }
})

