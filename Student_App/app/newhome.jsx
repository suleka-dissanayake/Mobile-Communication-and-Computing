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
}