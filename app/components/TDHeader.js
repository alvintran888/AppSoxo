/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Header} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import {Colors, Fonts, Images} from '@app/themes';

const TDHeader = ({leftComponentOnPress, title}) => {
  return (
    <Header
      statusBarProps={{barStyle: 'dark-content', backgroundColor: 'transparent', translucent: true}}
      barStyle="dark-content"
      placement="center"
      leftComponent={
        <TouchableOpacity
          style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#11111108',
            borderRadius: 100,
            padding: 10,
            width: 48,
            height: 48,
          }}
          onPress={leftComponentOnPress}>
          <FontAwesome name={'arrow-left'} size={24} color={'#2E2E2E'} />
        </TouchableOpacity>
      }
      centerComponent={{
        text: title,
        style: {color: '#2E2E2E', ...Fonts.style.extralarge_bold},
      }}
      containerStyle={{
        backgroundColor: Colors.transparent,
        borderBottomWidth: 0,
        justifyContent: 'space-around',
      }}
      centerContainerStyle={{justifyContent: 'center'}}
    />
  );
};

export default TDHeader;

const styles = StyleSheet.create({});
