import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScroolView,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { Header } from '@app/components';
import moment from 'moment';


const MienBacDetail = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dataNV, setDataNV] = useState([]);
    const [maDb, setMaDb] = useState([]);

    const _renderItem = ({item}) => {
        return (
           <TouchableOpacity style={{flexDirection:'row', margin: 10, padding:10}}>
                {/* image */}
                <View style={{flex:1, }}>

                <Image source={{uri: item.avatar}} style={{height:100, width:120, borderRadius:20}}/>

                </View>
                    {/* ten */}
                <View style={{flex: 2 }}>
                    <View style={{ flex:0.3, flexDirection: 'row', marginLeft: 15, marginTop: 5,}}>
                        <Text style={{ fontSize: 20, paddingRight: 5 }}>{item.first_name}</Text>
                        <Text style={{ fontSize: 20 }}>{item.last_name}</Text>
                    </View>

                    <View style={{flex:3, marginLeft: 15,}}>
                    <Text style={{ fontSize: 13 }}>Email:{item.email}</Text>
                    </View>
                </View>
                {/* email */}

                {/* MaDb */}
                <View style={{height:40, width:'100%', backgroundColor:'#CFCF', flexDirection:'row' }}>
                        <View style={{flex:1, backgroundColor:'#CFCFCF'}}>

                        </View>

                        <View style={{flex:6}}>
                            <Text>{item.MaDb}</Text>
                        </View>

                    </View>
                
            
          </TouchableOpacity>
      
        );
      };

    useEffect(() => {

        const fetchData = async () => {
          const res = await fetch('https://api.xoso.me/app/json-kq-mienbac?name=KQXS&v=2&ngay_quay=2023-03-12');
          const json = await res.json();
          console.log(json.data.lotData.MaDb);
        }
        
        fetchData();
      },[])


    return (
        
        <View style={{flex:1}}>

            <Header
                    title={'Xổ số Miền Bắc'}
                    backgroundColor={'#112951'}
                    leftComponent={'true'}
                    isStack={'true'}
                    
            />
           
                <View style={{ flex: 1 }}>
                   
                    <View style={{ height: 80, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: 'red' }}>
                                Xổ số Miền Bắc (Hà Nội)
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 50 }} onPress={() => setOpen(true)}>
                                <Text style={{}}>
                                    {moment(date).format('YYYY-MM-DD')}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ height: 1, backgroundColor: '#CFCFCF' }} />

                    
                

                    <FlatList
                    data={_renderItem}
                    randerItem={{item}}
                    keyExtractor={item => item.MaDb}
                    />
                </View>

            

         </View>
         
            
    )
}
export default MienBacDetail;