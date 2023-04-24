import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, RadioButton} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

const CreateAccount = () => {
    const navigation=useNavigation('')
    const [gender, setGender] = useState('Male')

    const genders = [
        { label: 'Nam', value: 'male' },
        { label: 'Nữ', value: 'female' },
        { label: 'Khác', value: 'other' }
      ];

return (
  <View style={{flex: 1, backgroundColor:'black'}}>
    <TouchableOpacity style={{height:50, width:50, marginTop:20, marginLeft:15}}
    onPress={() => {
        navigation.goBack('')
    }}
    ><FontAwesome name={'angle-left'} color={'white'} size={40}/>
    </TouchableOpacity>
    <View style={{ height: 50, marginTop: 50, alignItems: 'center'}}>
      <Text style={{fontSize: 30, color:'white'}}>Tạo tài khoản mới</Text>
    </View>

    <View style={{  marginTop:30, alignItems:'center'}}>
        <Image style={{height:100, width:100, borderRadius:20}} source={require("../../assets/images/anhcode.jpeg")}/>
        <Text style={{marginTop:10, color:'white', }}>Employees Xanh SM</Text>
    </View>

    <View style={{ marginTop:120, alignItems:'center'}}>
        <TextInput style={{borderWidth:2, borderColor:'white', borderRadius: 10, width:350, color:'white'}} placeholderTextColor={"white"} placeholder="Họ và tên"></TextInput>
        <View style={{height:100, width:350, borderWidth:2, borderColor:'white', borderRadius: 10, marginTop:10, }}>
            <Text style={{color:'white', marginTop:5}}>Chọn giới tính: </Text>
        </View>
        <TextInput style={{borderWidth:2, borderColor:'white', borderRadius: 10, width:350, color:'white', marginTop:10}} placeholderTextColor={"white"} placeholder="Email" />

    </View>
  </View>
);
}

export default CreateAccount;