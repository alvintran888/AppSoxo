import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect, useParams} from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { Header } from '@app/components';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';


const Detail = () => {
    const [detailEmployee, setDetailEmployee] = useState({})
    const route = useRoute()

    const { itemId } = route.params;

    useEffect(() => {
        console.log(itemId)
    }, [])

    
    useEffect(() => {
        const fetchData = async () => {
          axios({
            method: 'get',
            url: `https://gorest.co.in/public/v2/users/${itemId}`,
            headers: {
              'Authorization' : 'Bearer 9455730374cceb570fda91dbe2b9a859387e5da58a080eddb80bea281e59a4ba'
            }
          }).then((res) => {
            console.log(res.data)
            setDetailEmployee(res.data);
          })
        };
        fetchData();
      }, [])

    // const userUrl = 'https://gorest.co.in/public/v2/users/';
    //     const url = `${userUrl}${id}`;
    //     const data = {
    //       name,
    //       email,
    //       image
    //     };

    //     axios.post(url, data)
    // .then(response => {
    //   console.log('Data submitted successfully');
    // })
    // .catch(error => {
    //   console.log('Error submitting data: ', error);
    // });
    
    return(
        <View style={{flex:1}}>
            <Header
        title={'Thông tin cá nhân'}
        backgroundColor={'#849FE3'}
        isStack={'True'}
        />

        <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20, backgroundColor:'#0BB9BA'}}>
            <Image source={{uri: 'https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png'}} style={{height:150, width:150, borderRadius:100}}/>
        </View>

        <View style={{flex:3,padding:20}}>
            <View style={{ height:30, width:200, marginTop:10}}>
                <Text style={{fontSize:20, color:'#808080', fontWeight:'500',}}>Thông tin của bạn </Text>
                
            </View>

            <View style={{height:30, marginTop:10}}>
                <Text style={{fontSize:20, color:'black'}}>Họ và tên</Text>
            </View>

            <View style={{marginTop:5,}}>
                <TextInput style={{backgroundColor:'#DADADA', borderRadius:5, color:'black'}} placeholderTextColor={'#808080'} placeholder="name">{detailEmployee.name}</TextInput>
            </View>

            <View style={{height:30, marginTop:10}}>
                <Text style={{fontSize:20, color:'black'}}>Email</Text>
            </View>

            <View style={{marginTop:5,}}>
                <TextInput style={{backgroundColor:'#DADADA', borderRadius:5, color:'black'}} placeholderTextColor={'#808080'} placeholder="name">{detailEmployee.email}</TextInput>
            </View>
            
            <View style={{height:30, marginTop:10}}>
                <Text style={{fontSize:20, color:'black'}}>Gender</Text>
            </View>

            <View style={{marginTop:5,}}>
                <TextInput style={{backgroundColor:'#DADADA', borderRadius:5, color:'black'}} placeholderTextColor={'#808080'} placeholder="name">{detailEmployee.gender}</TextInput>
            </View>

            <TouchableOpacity style={{height:50, backgroundColor:'#808080', marginTop:20, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:25, color:'white', fontWeight:'bold'}}>Cập nhật</Text>
            </TouchableOpacity>
        </View>
        </View>
        
    )
}

export default Detail;