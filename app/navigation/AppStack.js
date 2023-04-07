import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';

import {HomeListEmpl, AddNewEmpl, Detail, LoginScreen} from '../screen/employees';

import { TrangChu, userScreen, KetQua, HomNay, MienBacDetail } from '../screen/tanDanXoSo';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'LoginScreen'} screenOptions={{headerShown: false}}>

      <Stack.Screen name="HomeListEmpl" component={HomeListEmpl} />
      <Stack.Screen name="AddNewEmpl" component={AddNewEmpl} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />


      {/* <Stack.Screen name="TrangChu" component={TrangChu} />
      <Stack.Screen name="userScreen" component={userScreen} />
      <Stack.Screen name="MienBacDetail" component={MienBacDetail} />
      <Stack.Screen name="KetQua" component={KetQua} />
      <Stack.Screen name="HomNay" component={HomNay} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
