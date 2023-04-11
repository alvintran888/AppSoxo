import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect, useParams, useRoute} from "react";
import {View, Text, Image} from 'react-native';
import { Header } from '@app/components';
import axios from 'axios';


const Detail = ( route) => {
    const navigation = useNavigation()
    // const { itemId } = route.params;
    // const itemId = navigation.getParam('itemId')

    // const { id } = useParams();
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //       axios({
    //         method: 'get',
    //         url: `https://gorest.co.in/public/v2/users/${id}`,
    //         headers: {
    //           'Authorization' : 'Bearer 9455730374cceb570fda91dbe2b9a859387e5da58a080eddb80bea281e59a4ba'
    //         }
    //       }).then((res) => {
    //         setDetailuser (res.data); 
    //       })
    //     };
    //     fetchData();
    //   }, [])

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
        title={'Detail Employees'}
        backgroundColor={'#849FE3'}
        isStack={'True'}
        />

        <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20}}>
            <Image source={{uri: 'https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png'}} style={{height:180, width:180, borderRadius:100}}/>
        </View>

        <View style={{flex:3, backgroundColor:'#CFC'}}>
            <Text> Employees ID: </Text>
        </View>
        </View>
        
    )
}

export default Detail;