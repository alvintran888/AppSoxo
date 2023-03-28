import React, {useState, useEffect} from'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button, } from 'react-native';
import { Header } from '@app/components';


const AddNewEmpl = () => {
    const [firstName, setFirstname] = useState('Nghia');
    const [lastName, setLastname] = useState('Tran');
    const [email, setEmail] = useState('Chloe@gmail.com');

    const SaveEmpl = () => {
        //Tạo dữ liệu
        let dulieu = {first: firstName, last:lastName, email: email}

        fetch('https://reqres.in/api/users?page=2', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( dulieu )
        })

        .then ((res) => {
                if(res.status ==201)
                alert ("Add Successfull")
        })
        .catch ((ex) => {
            console.log(ex);
        })
    }
    
    return(
        <View style={{flex:1}}>
            <Header title={'New Employee'} backgroundColor={'#849FE3'} isStack={'True'}/> 

            
            <TextInput placeholder='First Name'
            onChangeText={(txt) => {setFirstname(txt)}}
            />
            <TextInput placeholder='Last Name'
            onChangeText={(txt) => {setLastname(txt)}}
            />
            <TextInput placeholder='Email'
            onChangeText={(txt) => {setEmail(txt)}}
            />
            <Button title="Save" onPress={SaveEmpl}/>
            
            
            
        </View>
    );
}
export default AddNewEmpl;