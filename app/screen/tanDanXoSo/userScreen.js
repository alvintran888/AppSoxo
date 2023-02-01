import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>

        <View style={{backgroundColor: '#3B3B'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome name={'arrow-left'} style={{color: '#888888', backgroundColor: '#4d4d8d'}} size={25} />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};

export default UserScreen;
const styles = StyleSheet.create({});
