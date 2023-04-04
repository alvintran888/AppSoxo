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
        <View style={{flex:1}}>
            <Header title={'New Employee'} backgroundColor={'#849FE3'} isStack={'True'}/>  

            <TextInput 
            placeholder='Name'
            value={name}
            onChangeText={setName}
            />

            <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            />

            <TextInput 
            placeholder='Gender'
            value={gender}
            onChangeText={setGender}
            />

            <Button title="Save" onPress={SaveEmpl}/>
            
            
            
        </View>
    );
}
export default AddNewEmpl;