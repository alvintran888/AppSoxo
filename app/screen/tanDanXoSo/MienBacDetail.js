import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScroolView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { Header } from '@app/components';
import { DatePickerIOSBase } from 'react-native';
import { getApiLevel } from 'react-native-device-info';
import moment from 'moment';


const MienBacDetail = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        getAPI();
        return () => {};
    }, [date]);


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

                    {/* <View style={{marginTop:5}}>
                        <Text style={{fontWeight:'300', color:'black'}}>
                        Thứ 5, 16/02/2023
                        </Text>
                    </View> */}
                    <View>
                        <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 50 }} onPress={() => setOpen(true)}>
                            <Text style={{}}>
                                {moment(date).format('YYYY-MM-DD')}
                            </Text>
                        </TouchableOpacity>

                        <DatePickerIOSBase
                            style={{}}
                            modal
                            open={open}
                            date={date}
                            onConfirm={date => {
                                setOpen(false);
                                setDate(date);
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#CFCFCF' }} />


                <View style={{}}>

                </View>


            </View>



         </View>
            
    )
}
export default MienBacDetail;