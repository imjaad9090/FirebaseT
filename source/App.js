/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";
import Home from './Home';


export const App = StackNavigator({
  home : {screen : Home}
},
{
  initialRouteName:'home'
})


export default App;