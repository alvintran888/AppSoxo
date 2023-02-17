import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Header } from '@app/components';


const KetQua = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <Header
                    title={'Kết quả xổ Số'}
                    backgroundColor={'#112951'}
                    leftComponent={'true'}
                    isStack={'true'}
            />
        
        

        </View>

    );

};
export default KetQua;

const style = StyleSheet.create({});
