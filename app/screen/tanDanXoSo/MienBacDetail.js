import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScroolView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

const HomNayItem = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style={{height:60, backgroundColor:'#112A51', flexDirection:'row'}}>
                <TouchableOpacity 
                 onPress={() => {
                    navigation.goBack();
                 }} style={{flex:1,padding:10, flexDirection:'row', alignItems:'center' }}
                 >
                    <FontAwesome name={'angle-left'} size={28} color={'#FFF'}/>
                    <Text style={{fontSize:15, color:'#FFF', padding:5}}>Back</Text>
                </TouchableOpacity>

                <View style={{flex:4, justifyContent:'center'}}>
                    <Text style={{marginLeft:50, color:'#FFF', fontSize:23, fontWeight:'400'}}>
                        Xổ số Miền Bắc
                    </Text>
                </View>
            </View>

        </View>
            
    )
}
export default HomNayItem;