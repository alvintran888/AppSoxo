import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';

import {BottomTabXoSo, TrangChu, userScreen, KetQua, HomNay } from '../screen/tanDanXoSo';
// import TrangChu from '../screen/account/TrangChu';
// import userScreen from '../screen/account/userScreen';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'TrangChu'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} /> 

       <Stack.Screen name="TrangChu" component={TrangChu} />
      <Stack.Screen name="userScreen" component={userScreen} />
      {/* <Stack.Screen name="BottomTabXoSo" component={BottomTabXoSo} /> */}
      <Stack.Screen name="KetQua" component={KetQua} />
      <Stack.Screen name="HomNay" component={HomNay} />
    </Stack.Navigator>
  );
};

export default AppStack;
