import { useState } from "react"
import React from "react"
import {View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator} from "react-native"

export default function DetailsScreen({route, navigation}) {
    const {id} = route.params;
    const [student, setStudent] = useState({});

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Student Details</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/back.png')} style={styles.backIcon} />
                </TouchableOpacity> 
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{student.name}</Text>
                    <Text style={styles.label}>Age:</Text>
                    <Text style={styles.value}>{student.age}</Text>
                    <Text style={styles.label}>Class:</Text>

                    <Text style={styles.value}>{student.class}</Text>
                </View>
            </ScrollView>
        </View>
    );
};