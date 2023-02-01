import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {SignInScreen, SignInEmailScreen, SignUpScreen, ForgotScreen, ChangePasswordScreen} from '@app/screen/account';

import { BottomTabXoSo, TrangChu, userScreen, KetQua, HomNay} from '@app/screen/tanDanXoSo';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'SignInScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />

      <Stack.Screen name="TrangChu" component={TrangChu} />
      <Stack.Screen name="userScreen" component={userScreen} />
      {/* <Stack.Screen name="BottomTabXoSo" component={BottomTabXoSo} /> */}
      <Stack.Screen name="KetQua" component={KetQua} />
      <Stack.Screen name="HomNay" component={HomNay} />
      
    </Stack.Navigator>
  );
};

export default AppStack;
