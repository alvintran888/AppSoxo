/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import AppBottomTab from './AppBottomTab';
import AppStack from './AppStack';
import {Host} from 'react-native-portalize';

const RootContainerScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="AppBottomTab"
          component={AppBottomTab}
          options={{
            animationEnabled: false,
          }}
        />

        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootContainerScreen;

const styles = StyleSheet.create({});
