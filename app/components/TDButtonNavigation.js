/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, Animated, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';

import {Colors, Fonts} from '@app/themes';
import {TouchableOpacity as TouchableOpacityDemo} from 'react-native-gesture-handler';

const TDButtonNavigation = () => {
  const contentRef = useRef < Animated.AnimatedComponent < ScrollView >> null;
  const modalizeRef = useRef(null);

  const ModalHide = () => {
    modalizeRef.current?.close();
  };


  return (
    <>
      <TouchableOpacityDemo
        onPress={() => {
          modalizeRef.current?.open();
        }}
        activeOpacity={0.8}
        style={{
          width: 60,
          height: 60,
          bottom: 20,
          borderRadius: 30,
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#605f6026',
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 1,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <FontAwesome name={'plus'} size={24} color={'#FFF'} />
      </TouchableOpacityDemo>
      <Portal>
        <Modalize
          scrollViewProps={{showsVerticalScrollIndicator: false}}
          ref={modalizeRef}
          contentRef={contentRef}
          modalHeight={500}
          snapPoint={500}>
          <TouchableOpacity
            onPress={() => {
              ModalHide();
            }}>
            <Text>Dong</Text>
          </TouchableOpacity>
          <Text>123123</Text>
        </Modalize>
      </Portal>
    </>
  );
};

export default TDButtonNavigation;

const styles = StyleSheet.create({});
