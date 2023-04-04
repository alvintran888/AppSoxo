import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, } from'react-native';
import { Header } from '@app/components';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import axios from 'axios';

// https://reqres.in/
const HomeListEmpl = () => {
    //const [maNv, setMaNv] = useState([]);
    const [userList, setUserList] = useState([]);
    const navigation = useNavigation();


    useEffect(() => {
          const fetchData = async () => {
            axios({
              method: 'get',
              url: 'https://gorest.co.in/public/v2/users/',
              headers: {
                'Authorization' : 'Bearer 9455730374cceb570fda91dbe2b9a859387e5da58a080eddb80bea281e59a4ba'
              }
            }).then((res) => {
              setUserList(res.data); 
            })
          };
          fetchData();
        }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('https://reqres.in/api/users?page=2');
    //         const json = await res.json();
    //         setMaNv(json.data)
    //         console.log(json.data)
    //     }
    //     fetchData(); 
    // },[]);


    const renderNv = ({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})} style={{height: 120, marginTop: 10, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 1}}>
              {/* image */}

              <Image source={{uri: 'https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png'}} style={{height: 100, width: 100, borderRadius:150}} />
            </View>

            <View style={{flex: 3}}>
              <View style={{flex: 1,flexDirection:'row', marginLeft: 10, marginTop: 5, }}>
                <Text style={styles.name}>Name:</Text>
                <Text style={{fontSize:20, fontWeight:'50000'}}> {item.name}</Text>
              </View>

              <View style={{flex: 1, marginLeft:10,flexDirection:'row', }}>
              <Text style={{fontSize: 20, fontWeight:'700'}}>Gender:</Text>
              <Text style={{fontSize: 20, marginLeft:5, }}>{item.gender} </Text>
              </View>

                <View style={{flex:1, marginLeft: 10,flexDirection:'row'}}>
                    <Text style={{fontSize:17, fontWeight:'800'}}>Email: </Text>
                    <Text style={{fontSize:17, fontWeight:'500'}}>{item.email}</Text>
                </View>
            </View>
          </TouchableOpacity>
        );
    }

    return (
      <View style={{flex: 1}}>
        <Header
          title={'Danh sách nhân viên'}
          backgroundColor={'#849FE3'}
          leftComponent={'flase'}
          RightComponent={() => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => {
                navigation.navigate('AddNewEmpl');
              }}>
              <FontAwesome name={'plus'} color={'#FFF'} size={30} />
            </TouchableOpacity>
          )}
        />

        <FlatList data={userList} renderItem={renderNv} keyExtractor={item => item.id} />
      </View>
    );
}
export default HomeListEmpl;
const styles = StyleSheet.create({
  name:{
    fontSize:20,
    fontWeight:'700'
  }
})





