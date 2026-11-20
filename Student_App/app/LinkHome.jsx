import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Details from './Details'

function HomeScreen({ navigation }) {
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