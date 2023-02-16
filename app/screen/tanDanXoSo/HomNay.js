import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const HomNay = () => {
    const navigation = useNavigation();
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', height: 65, backgroundColor:'#112A51'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FontAwesome name={'arrow-left'} size={30} color={'#FFF'} />
          </TouchableOpacity>

          <View style={{flex:5, justifyContent:'center', alignItems:'flex-start', paddingLeft:60}}>
            <Text style={{fontSize:25, color:'#FFF'}}>
                Xổ số Hôm nay
            </Text>
          </View>

        </View>

        {/* ////////////////////////////////////////// */}
            <TouchableOpacity style={{flexDirection:'row', height:'10%'}}>
                
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width: 40, height: 40, borderRadius: 8, marginLeft:20}} source={require('../../assets/images/ketqua.jpg')}/>
                </View>

                <View style={{flex:6, justifyContent:'center', marginLeft:15}}>
                    <Text style={{fontSize:25, color:'black', fontWeight:'600', marginLeft:30}}>
                       Xổ Số Miền Bắc
                    </Text>

                    <Text style={{fontSize:18, marginLeft:30}}>
                        Mở thưởng Thứ 4, 15/02/2023
                    </Text>
                </View>

            </TouchableOpacity>
            <View style={{height:2, backgroundColor:'#CFCFCF'}}/>

      </View>
    );

};
export default HomNay;

const style = StyleSheet.create({});