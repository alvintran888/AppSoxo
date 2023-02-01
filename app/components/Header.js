/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import {Colors, Fonts, Images} from '@app/themes';

const Item = ({leftComponent, isStack, title, showRight, RightComponent, backgroundColor, textColor}) => {
  const navigation = useNavigation();

  return (
    <Header
      statusBarProps={{barStyle: 'dark-content', backgroundColor: 'transparent', translucent: true}}
      barStyle="dark-content"
      placement="left"
      leftComponent={
        leftComponent || isStack ? (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
            }}
            onPress={() => {
              isStack ? navigation.goBack() : navigation.openDrawer();
              try {
                global.sound.stop();
              } catch (error) {}
            }}>
            <FontAwesome
              name={isStack ? 'long-arrow-left' : 'bars'}
              size={24}
              color={textColor ? textColor : Colors.white}
              underlayColor="#00000000"
              containerStyle={{paddingStart: 0, marginHorizontal: 10}}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )
      }
      centerComponent={{
        text: title,
        style: {color: textColor ? textColor : Colors.white, ...Fonts.style.extralarge_bold},
        onPress:
          leftComponent || isStack
            ? () => {
                isStack ? navigation.goBack() : navigation.openDrawer();
              }
            : null,
      }}
      rightComponent={RightComponent && <RightComponent />}
      containerStyle={{
        backgroundColor: backgroundColor ? backgroundColor : Colors.primary,
        justifyContent: 'space-around',
      }}
      centerContainerStyle={{justifyContent: 'center'}}
    />
  );
};

export default Item;

const styles = StyleSheet.create({
  icon: {paddingStart: 0, marginHorizontal: 10},
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
  },
});
