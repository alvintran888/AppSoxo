import React from "react";
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';


const LoginScreen = ()=> {
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{paddingTop:'50%', alignItems:'center'}}>
                <View style={{height:70, width:'85%', alignItems:'center'}}>
                    <Text style={{fontFamily:'Georgia', fontSize:40, color:'black'}}>EmS</Text>
                </View>
            </View>

            <View style={{height:50, marginTop:20, }}>
                <TextInput style={{marginLeft:20, marginRight:20, backgroundColor:'#CFCFCF', borderRadius:5}} placeholder="Tên người dùng"></TextInput>
            </View>
            <View style={{height:50, marginTop:10, }}>
                <TextInput style={{marginLeft:20, marginRight:20,backgroundColor:'#CFCFCF', borderRadius:5}} placeholder="Mật khẩu"></TextInput>
            </View>

            <TouchableOpacity style={{height:20, width:120, marginTop:10, marginLeft:270}}>
                <Text style={{color:'#1F8AD2', fontSize:15, marginLeft:8, fontWeight:'500'}}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            
            
        </View>
    )
//
}
export default LoginScreen;