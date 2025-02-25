import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("window");

export const storyListStyles = StyleSheet.create({
    container: { flex: 1 },
    listItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
    listContainer: {
        height: height - (height * 0.16),
        // backgroundColor: 'pink',
        paddingVertical: (height * 0.01)
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