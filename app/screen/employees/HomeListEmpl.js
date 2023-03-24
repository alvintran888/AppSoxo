import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from'react-native';
import { Header } from '@app/components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

// https://reqres.in/
const HomeListEmpl = () => {
    const [maNv, setMaNv] = useState([])


    // useEffect(() => {
    //       const fetchData = async () => {
    //         axios({
    //           method: 'get',
    //           url: 'https://reqres.in/api/users?page=2'
    //         }).then((res) => {
    //           console.log(res.data); 
    //         })
    //       };
    
    //       fetchData();
    //     }, [])

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://reqres.in/api/users?page=2');
            const json = await res.json();
            setMaNv(json.data)
            setData(res.data)
            console.log(json.data)
        }
        fetchData(); 
    },[]);


    const renderNv = ({item}) => {
        return (
          <View style={{height: 120, marginTop: 10, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 1}}>
              {/* image */}

              <Image source={{uri: item.avatar}} style={{height: 100, width: 120, borderRadius: 20}} />
            </View>

            <View style={{flex: 2}}>
              <View style={{flex: 1.5, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                <Text style={{fontSize: 20, paddingRight: 5}}>{item.first_name}</Text>
                <Text style={{fontSize: 20}}>{item.last_name}</Text>
              </View>

                <View style={{flex:3, marginLeft: 10}}>
                    <Text style={{fontSize:17}}>{item.email}</Text>
                </View>
            </View>
          </View>
        );
    }

    return(
        <View style={{flex:1}}>
            <Header title={'Danh sách nhân viên'} backgroundColor={'#849FE3'} leftComponent={'False'}/>

            <FlatList  
                data={maNv}
                renderItem={renderNv}
                keyExtractor={item => item.id}
                />
        </View>
    )
}
export default HomeListEmpl;



