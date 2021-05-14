/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Home from './src/screens/Home';


const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 1000, fade: true });
  },[])

  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' backgroundColor='#3949ab'/>
      <Home/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
