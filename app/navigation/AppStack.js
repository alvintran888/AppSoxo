import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';

import {HomeListEmpl, AddNewEmpl, Detail, LoginScreen, CreateAccount} from '../screen/employees';

import {TrangChu, userScreen, KetQua, HomNay, MienBacDetail} from '../screen/tanDanXoSo';

import {HomeScreen, TracNghiemScreen} from '../screen/tuvan';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TracNghiemScreen" component={TracNghiemScreen} />

      {/* <Stack.Screen name="HomeListEmpl" component={HomeListEmpl} />
      <Stack.Screen name="AddNewEmpl" component={AddNewEmpl} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} /> */}

      {/* <Stack.Screen name="TrangChu" component={TrangChu} />
      <Stack.Screen name="userScreen" component={userScreen} />
      <Stack.Screen name="MienBacDetail" component={MienBacDetail} />
      <Stack.Screen name="KetQua" component={KetQua} />
      <Stack.Screen name="HomNay" component={HomNay} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
