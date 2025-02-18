import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("window");

export const storyListStyles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        // borderLeftWidth: 5,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#fff'
         // ✅ iOS Shadow
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,

        // ✅ Android Shadow
        // elevation: 0.5,
    },
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    flex2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    statusView: {
        backgroundColor: 'green',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 3
    },
    statusText: {
        color: '#fff',
        fontSize: 10
    },
    title: {
        fontWeight: 500,
        color: '#000'
    },
    date: {
        fontSize: 13
    }
});