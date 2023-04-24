import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';


const LoginScreen = ()=> {
    const navigation = useNavigation();
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingTop: '50%', alignItems: 'center'}}>
          <View style={{height: 70, width: '85%', alignItems: 'center'}}>
            <Text style={{fontFamily: 'Georgia', fontSize: 40, color: 'black'}}>EmS</Text>
          </View>
        </View>

        <View style={{height: 50, marginTop: 20}}>
          <TextInput
            style={{marginLeft: 20, marginRight: 20, backgroundColor: '#FAFAFA', borderRadius: 5}}
            placeholder="     Tên người dùng"></TextInput>
        </View>
        <View style={{height: 50, marginTop: 10}}>
          <TextInput
            style={{marginLeft: 20, marginRight: 20, backgroundColor: '#FAFAFA', borderRadius: 5}}
            placeholder="      Mật khẩu"></TextInput>
        </View>

        <TouchableOpacity style={{height: 20, width: 120, marginTop: 10, marginLeft: 270}}>
          <Text style={{color: '#007ACC', fontSize: 15, marginLeft: 8, fontWeight: '500'}}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <View style={{padding: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeListEmpl');
            }}
            style={{height: 50, backgroundColor: '#007ACC', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: '800', color: 'white'}}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('CreateAccount')
        }}
        style={{ height:20, alignItems:'center', width:140, marginLeft:140}}>
            <Text style={{fontSize:15}}>Chưa có tài khoản?</Text>
        </TouchableOpacity>
      </View>
    );
//
}
export default LoginScreen;