import React, {useState, useEffect} from'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button, } from 'react-native';
import { Header } from '@app/components';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';


const AddNewEmpl = () => {
    const navigate = useNavigation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const SaveEmpl = async () => {
        var body = {
            name: name,
            email: email,
            gender: gender,
            status: 'inactive'
        }
        const res = axios.post('https://gorest.co.in/public/v2/users/', body, {
            headers: {
                'Authorization' : 'Bearer 9455730374cceb570fda91dbe2b9a859387e5da58a080eddb80bea281e59a4ba'
            }
        }).then((response) => {
            if(response.status === 201){
                showMessage({
                    message: 'Thêm thành công',
                    description: 'Thêm mới người dùng thành công',
                    type: 'success',
                  });
                console.log(response.data)
                navigate.goBack()
            }
            else {
                console.log('Added failed !');
            }
        })
    }
    
    return(
        <View style={{flex:1, backgroundColor:'black', padding:20}}>
            <Header title={'Thêm thành viên mới'} backgroundColor={'black'} isStack={'True'}/>  
        
        
            <View style={{marginTop:100}}>
                <Text style={{color:'white', fontSize:25, marginBottom:10}}>Họ và tên</Text>
            <TextInput 
            style={{borderWidth:2, borderColor:'white', height:50, paddingHorizontal:20, backgroundColor:'#808080', color:'white', fontSize:20, borderRadius:10}} placeholderTextColor={'white'} value={name} onChangeText={setName} placeholder='Họ tên' />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'white', fontSize:25, marginBottom:10}}>Email</Text>
            <TextInput 
            style={{borderWidth:2, borderColor:'white', height:50, paddingHorizontal:20, backgroundColor:'#808080', color:'white', fontSize:20, borderRadius:10}} placeholderTextColor={'white'} value={email} onChangeText={setEmail} placeholder='Email' />
            </View>
        

            <View style={{marginTop:20, marginBottom:50}}>
                <Text style={{color:'white', fontSize:25, marginBottom:10}}>Giới tính</Text>
            <TextInput 
            style={{borderWidth:2, borderColor:'white', height:50, paddingHorizontal:20, backgroundColor:'#808080', color:'white', fontSize:20, borderRadius:10}} placeholderTextColor={'white'} value={gender} onChangeText={setGender} placeholder='Giới tính' />
            </View>
        
            
            <TouchableOpacity style={{height:50, borderWidth:2, borderColor:'white', borderRadius: 10, justifyContent:'center', alignItems:'center'}}  onPress={SaveEmpl}>
                <Text style={{fontSize:20, color:'white'}}>Thêm mới</Text>
                </TouchableOpacity>            
            
        </View>
    );
}
export default AddNewEmpl;