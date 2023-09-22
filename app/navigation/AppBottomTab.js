import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import {HomeScreen, TracNghiemScreen} from '@app/screen/tuvan';
import {isTablet} from 'react-native-device-info';

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
          },
          tabBarLabel: 'Trang chủ',
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarBadge: null,
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Image source={require('../assets/images/icon_house.png')} color={focused ? '#10A0EE' : '#757E83'} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TracNghiemScreen"
        component={TracNghiemScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
          },
          tabBarLabel: 'Trắc nghiệm',
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarBadge: null,
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Image source={require('../assets/images/icon_house.png')} color={focused ? '#10A0EE' : '#757E83'} />
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
                color={focused ? Colors.primary : '#10A0EE'}
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
        name="NhacNhoScreen"e
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
