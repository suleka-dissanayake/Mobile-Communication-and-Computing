import React, {useState} from 'react'
import {View, Text, Button, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function HomeScreen({navigation}) {
    const students = [
        {id: 1, name: 'John', age: 20, city: 'New York'},
        {id: 2, name: 'Jane', age: 22, city: 'London'},
        {id: 3, name: 'Bob', age: 21, city: 'Paris'},
        {id: 4, name: 'Alice', age: 23, city: 'Berlin'},
    ];

    const [search, setSearch] = useState('')

    const filteredStudents = students.filter((student) => {
        student.name.toLowerCase().includes(search.toLowerCase())
        student.city.toLowerCase().includes(search.toLowerCase())
    });


    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                data={filteredStudents}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', {student: item})}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )
            />}
            />
        </View>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}