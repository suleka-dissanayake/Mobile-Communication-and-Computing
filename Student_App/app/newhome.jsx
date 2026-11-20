import React, {useState} from 'react'
import {View, Text, Button, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function HomeScreen({navigation}) {
    const students = [
        {id: 1, name: 'John', age: 20},
        {id: 2, name: 'Jane', age: 22},
        {id: 3, name: 'Bob', age: 21},
        {id: 4, name: 'Alice', age: 23},
    ];

    const [search, setSearch] = useState('')

    const filteredStudents = students.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase())
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