import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from'react-native';
import { Header } from '@app/components';
import { useNavigation } from '@react-navigation/native';

 
const HomeListEmpl = () => {
    return(
        <View style={{flex:1}}>
            <Header title={'Danh sách nhân viên'} backgroundColor={'#849FE3'} leftComponent={'False'}/>
            <View style={{height:'16%', backgroundColor:'#CFCFCF', marginTop:10, flexDirection:'row', padding: 10}}>
                <View style={{flex:1, backgroundColor:'red'}}>

                </View>

                <View style={{flex:2, backgroundColor:'black'}}>

                </View>
            
            </View>
        </View>
    )
}
export default HomeListEmpl;
