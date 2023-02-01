/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '@app/themes';
import {TDButtonPrimary, TDTextInputAccount, TDHeader} from '@app/components';

const SignInEmailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <TDHeader
        title={''}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />

      <ScrollView style={{flex: 1, padding: 16}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: 24, lineHeight: 32}}>Forgot Password</Text>
          <Text style={{color: Colors.gray70, fontSize: 14, lineHeight: 22, marginTop: 5}}>Recover your account password</Text>
        </View>
        <View style={{marginTop: 16}}>
          <TDTextInputAccount title={'Email'} placeholder={'Enter your email address'} showEye={false} />

          <TDButtonPrimary
            title={'Continue'}
            contentStyle={{marginTop: 32}}
            onPress={() => {
              navigation.navigate('ChangePasswordScreen');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInEmailScreen;

const styles = StyleSheet.create({});
