import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ExampleAPIs = () => {

    const [todos, setTodos] = useState();

    const getTodoData = async () => {
        console.log('Fetching data...');
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            let json = await response.json();
            setTodos(json);
            console.log('Data fetched:', json);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        getTodoData();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Integrating APIs</Text>

            <ScrollView>
                {!!todos?.length && todos?.map((todo) => {
                    return (
                        <View style={styles.todo}>
                            <Text>{todo?.title}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default ExampleAPIs;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },

    todo: {
        width: '100%',
        marginVertical: 16,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        backgroundColor: 'lightgreen',
    },
});
