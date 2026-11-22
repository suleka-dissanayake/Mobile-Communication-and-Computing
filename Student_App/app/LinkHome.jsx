import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Details from './Details'

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://172.16.140.180:3000/students')
            .then(response => response.json())
            .then(data => {
                setStudents(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home Screen</h1>
        <p>
          Welcome to the Home Screen!
        </p>
        <button onClick={() => navigation.navigate('Details')}>Go to Details Screen</button>
      </header>
    </div>
  );
}