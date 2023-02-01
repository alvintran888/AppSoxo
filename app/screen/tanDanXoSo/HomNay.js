import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const HomNay = () => {
    const navigation = useNavigation();
    return (
        <View>

            <Text style={{color: "#686868", fontSize:40, backgroundColor: "#686"}}>Test case HomNay</Text>

        </View>
    );

};
export default HomNay;

const style = StyleSheet.create({});