/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '@app/themes';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
let isTablet = DeviceInfo.isTablet();

import {MAIN_HomeScreen, MAIN_SettingScreen} from '../screen/home';
import {TrangChu} from '../screen/tanDanXoSo/TrangChu';
import AccountStack from './AccountStack';

import {TDButtonNavigation} from '../components';

const PlusScreen = () => {
  return null;
};

const AppBottomTab = () => {
  return (


    <Tab.Navigator
      headerMode={'none'}
      initialRouteName="TrangChu"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: '#FFF',
        tabBarInactiveBackgroundColor: '#FFF',
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#757E83',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
        },
        tabBarStyle: {paddingHorizontal: isTablet ? 100 : 0, backgroundColor: '#FFFFFF'},
      }}
      backBehavior={'initialRoute'}>



      <Tab.Screen
        headerMode={'none'}
        name="TrangChu"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Lịch sử',
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Icon
                name="list"
                size={isTablet ? 24 : 22}
                color={focused ? Colors.primary : '#757E83'}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />



      {/* <Tab.Screen
        name="BaoCaoScreen"
        component={MAIN_HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Báo cáo',
          tabBarBadge: null,
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Icon
                name="chart-line"
                size={isTablet ? 24 : 22}
                color={focused ? Colors.primary : '#757E83'}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      /> */}


      {/* <Tab.Screen
        name="AddScreen"
        component={PlusScreen}
        options={{
          headerShown: false,
          tabBarButton: () => <TDButtonNavigation />,
        }}
      /> */}


      {/* <Tab.Screen
        name="NhacNhoScreen"
        component={MAIN_HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Nhắc nhở',
          tabBarIcon: ({focused, tintColor, size}) => (
            <Icon
              name="alarm-clock"
              size={isTablet ? 24 : 22}
              color={focused ? Colors.primary : '#757E83'}
              solid={focused ? true : false}
            />
          ),
        }}
      /> */}


      
      {/* <Tab.Screen
        name="SettingScreen"
        component={MAIN_SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({focused, tintColor, size}) => (
            <Icon
              name="cogs"
              size={isTablet ? 24 : 22}
              color={focused ? Colors.primary : '#757E83'}
              solid={focused ? true : false}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default AppBottomTab;
