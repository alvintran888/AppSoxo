import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const KetQua = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>

        
        <TouchableOpacity onPress={() => {
            navigation.goBack();
        }} style={{height:70,width:70, padding:20}}>
            <FontAwesome name={'arrow-left'} size={30} color={'#CFCFCF'}/>
        </TouchableOpacity>

        </View>

    );

};
export default KetQua;

const style = StyleSheet.create({});
