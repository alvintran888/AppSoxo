/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import {Colors, Fonts} from '@app/themes';

const TDTextInputAccount = ({showEye, value, onChangeText, placeholder, title}) => {
  const [hide, isHide] = useState(false);

  return (
    <View style={styles.content}>
      <Text style={{color: Colors.gray70, fontSize: Fonts.size.medium}}>{title ?? ''}</Text>
      <View style={styles.textinputContent}>
        <TextInput
          multiline={false}
          style={styles.textinput}
          placeholderTextColor={Colors.gray60}
          placeholder={placeholder}
          secureTextEntry={showEye && !hide}
        />
        {showEye && (
          <FontAwesome
            name={hide ? 'eye' : 'eye-slash'}
            color={'#787C7E'}
            size={20}
            style={styles.textinputIcon}
            onPress={() => isHide(!hide)}
          />
        )}
      </View>
    </View>
  );
};

export default TDTextInputAccount;

const styles = StyleSheet.create({
  content: {marginTop: 16},
  textinputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    height: 52,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textinput: {
    ...Fonts.style.large_regular,
    flex: 1,
    paddingVertical: 10,
  },
});
