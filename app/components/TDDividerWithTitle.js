import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TDDividerWithTitle = ({title, contentStyle}) => {
  return (
    <View style={[styles.content, contentStyle]}>
      <View style={styles.view} />
      <Text style={styles.title}>{title ?? ''}</Text>
      <View style={styles.view} />
    </View>
  );
};

export default TDDividerWithTitle;

const styles = StyleSheet.create({
  content: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  view: {backgroundColor: '#6C6C6C', height: 1, flex: 1},
  title: {fontSize: 14, color: '#6C6C6C', marginHorizontal: 12},
});
