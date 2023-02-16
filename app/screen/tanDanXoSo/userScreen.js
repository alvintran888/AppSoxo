import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:'#FFF'}}>
      <View>

        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }} style={{height:40, width: 40,marginTop:20, marginLeft:20}}>
            <FontAwesome name={'arrow-left'} style={{color: '#888888', }} size={28} />
          </TouchableOpacity>
        </View>

        <View style={{height:80, justifyContent:'center', alignItems:'center'}}>
          <Image style={{ borderRadius:100, height:50, width:50}} source={require('../../assets/images/user.jpg')}/>
        </View>

        <View style={{padding:10,  alignItems:'center'}}>
          <Text style={{fontSize:15, fontWeight:'bold', color:'black'}}>
            Nghĩa Trần
          </Text>
        </View>

            <View style={{flexDirection:'row',height:50}}>
              <View style={{flex:1, marginEnd:20}}>
                <Text style={{fontSize:15, color:'black', marginLeft:100}}>
                  Mã: 070302
                </Text>
              </View>

              <View style={{flex:1}}>
                <Text style={{fontSize:15, color:'black', marginLeft:10}}>
                  Điểm uy tín: 10
                </Text>
              </View>
            </View>

            

      </View>


    </View>
  );
};

export default UserScreen;
const styles = StyleSheet.create({});
