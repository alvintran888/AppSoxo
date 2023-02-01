/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {Colors, Fonts} from '@app/themes';

const TDButtonSecondary = ({contentStyle, titleStyle, imageStyle, title, image, onPress, ...props}) => {
  return (
    <TouchableOpacity style={[styles.content, contentStyle]} onPress={onPress}>
      {image && <Image source={image} style={[styles.image, imageStyle]} />}
      <Text style={[styles.text, {marginStart: image ? 10 : 0}, titleStyle]}>{title ?? ''}</Text>
    </TouchableOpacity>
  );
};

export default TDButtonSecondary;

const styles = StyleSheet.create({
  content: {
    marginTop: 16,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    padding: 16,
    flexDirection: 'row',
  },
  image: {width: 24, height: 24},
  text: {...Fonts.style.large_bold, color: Colors.lineblack, lineHeight: 24, marginStart: 10},
});
