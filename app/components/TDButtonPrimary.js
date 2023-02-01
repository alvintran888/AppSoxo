/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {Colors, Fonts} from '@app/themes';

const TDButtonPrimary = ({contentStyle, titleStyle, imageStyle, title, image, onPress, ...props}) => {
  return (
    <TouchableOpacity style={[styles.content, contentStyle]} onPress={onPress}>
      {image && <Image source={image} style={[styles.image, imageStyle]} />}
      <Text style={[styles.text, {marginStart: image ? 10 : 0}, titleStyle]}>{title ?? ''}</Text>
    </TouchableOpacity>
  );
};

export default TDButtonPrimary;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 100,
    padding: 16,
  },
  image: {width: 24, height: 24},
  text: {...Fonts.style.large_bold, color: Colors.white, lineHeight: 24},
});
