import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Button,
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import HomeScreen from './home';
import Q1 from './q1';
import Q2 from './q2';
import Q3 from './q3';
import Q4 from './q4';

export const talP = StackNavigator({
    Home: {screen: HomeScreen},
    Q1: {screen: Q1},
    Q2: {screen: Q2},
    Q3: {screen: Q3},
    Q4: {screen: Q4},
});

export const q1 = StackNavigator({
    Home:{screen: HomeScreen},
})

export default talP;