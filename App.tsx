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
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App = () => {
  return (
    <SafeAreaView>
      <TailwindProvider utilities={utilities}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <Header />
          <Home />
        </ScrollView>
      </TailwindProvider>
    </SafeAreaView>
  );
};

export default App;
