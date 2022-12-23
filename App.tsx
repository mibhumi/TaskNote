/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './components/Header';
import Home from './containers/Home';

const App = () => {
  return (
    <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <Header />
          <Home />
        </ScrollView>
    </SafeAreaView>
  );
};

export default App;
