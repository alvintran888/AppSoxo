/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import VersionCheck from 'react-native-version-check';
import {Header} from 'react-native-elements';

import {Colors, Fonts, Images} from '@app/themes';
import {TDMenuItem, TDDivider} from '@app/components';

const MAIN_HomeScreen = () => {
  const navigation = useNavigation();

  console.log(123123)

  return (
    <View style={{flex: 1}}>
      <Header
        statusBarProps={{barStyle: 'dark-content', backgroundColor: Colors.primary, translucent: true}}
        barStyle="dark-content"
        placement="center"
        centerComponent={{
          text: 'Cài đặt',
          style: {color: Colors.white, ...Fonts.style.extralarge_bold},
        }}
        containerStyle={{
          backgroundColor: Colors.primary,
          borderBottomWidth: 0,
          justifyContent: 'space-around',
        }}
        centerContainerStyle={{justifyContent: 'center'}}
      />
      <ScrollView style={{flex: 1}}>
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Thông báo, cảnh báo'} iconLeft="bell" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Tài khoản của tôi'} iconLeft="user" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Người dùng'} iconLeft="user-plus" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Phương tiện'} iconLeft="car" />
        <TDDivider />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Nhiên liệu'} iconLeft="gas-pump" />
        <TDMenuItem onPress={() => navigation.navigate('ListLoaiDichVuScreen')} title={'Loại hình dịch vụ'} iconLeft="wrench" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Loại chi'} iconLeft="credit-card" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Loại thu nhập'} iconLeft="wallet" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Lý do'} iconLeft="wrench" />
        <TDMenuItem
          onPress={() => navigation.navigate('NotificationScreen')}
          title={'Phương thức thanh toán'}
          iconLeft="usd-circle"
        />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Địa điểm'} iconLeft="map-marker" />
        <TDDivider />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Liên lạc'} iconLeft="envelope" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Thông tin thêm'} iconLeft="info-circle" />
        <Text style={{textAlign: 'center', margin: 10, color: '#818181'}}>
          Phiên bản: {`${VersionCheck.getCurrentVersion()} (${VersionCheck.getCurrentBuildNumber()})`}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MAIN_HomeScreen;
