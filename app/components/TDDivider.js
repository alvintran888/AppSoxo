import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TDDivider = ({contentStyle}) => {
  return <View style={[styles.content, contentStyle]} />;
};

export default TDDivider;

const styles = StyleSheet.create({
  content: {backgroundColor: '#6C6C6C', height: 0.6, flex: 1},
});
