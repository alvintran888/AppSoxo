import Item from '@app/components/Header';
import {View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {useNavigation} from '@react-navigation/native';



const DATA = [
  {
    image: require('../../assets/images/ketqua.jpg'),
    name: 'Kết quả',
    navigate: 'KetQua',
  },
  {
    image: require('../../assets/images/homnay.jpg'),
    name: 'Hôm nay',
    navigate: 'HomNay',
  },
  {
    image: require('../../assets/images/ketquadai.jpg'),
    name: 'Kết quả đài',
  },
  {
    image: require('../../assets/images/thongke.jpg'),
    name: 'Thống kê',
  },
  {
    image: require('../../assets/images/quaythu.jpg'),
    name: 'Quay thử',
  },
  {
    image: require('../../assets/images/vietlot.jpg'),
    name: 'Vietlot',
  },
  {
    image: require('../../assets/images/nguhanh.jpg'),
    name: 'Soi cầu',
  },
  {
    image: require('../../assets/images/tracuu.jpg'),
    name: 'Tra cứu',
  },
  {
    image: require('../../assets/images/thamkhao.jpg'),
    name: 'Tham khảo',
  },
  {
    image: require('../../assets/images/phantich.jpg'),
    name: 'Phân tích',
  },
  {
    image: require('../../assets/images/tuongthuat.jpg'),
    name: 'Tường thuật',
  },
  {
    image: require('../../assets/images/loket.jpg'),
    name: 'Lô kết',
  },
  {
    image: require('../../assets/images/logan.jpg'),
    name: 'Lô gan',
  },
  {
    image: require('../../assets/images/tkcau.jpg'),
    name: 'TK Cầu',
  },
  {
    image: require('../../assets/images/somo.jpg'),
    name: 'Sổ Mơ',
  },
];

const xoso = ({name}) => (
  <View style={styles.xoso}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const TrangChu = () => {
  const renderxoso = ({name}) => <xoso title={xoso.name} />;
  const navigation = useNavigation();

  const renderXoSo = ({item}) => {
    return (
       <TouchableOpacity onPress={() => {
        navigation.navigate(item.navigate)
       }}
       style={{flex: 1, margin: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={item.image} style={{width: 75, height: 75, borderRadius: 50}} />
        <Text style={{fontSize: 20, marginTop: 15}}>{item.name}</Text>
      </TouchableOpacity>
  
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#112951'}}>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 30}}>
          <View>
            <Image style={{width: 40, height: 40, borderRadius: 8}} source={require('../../assets/images/anhnen.png')} />
          </View>

          <View>
            <Text style={{fontSize: 23, marginLeft: 20, color: 'white'}}>Xổ số trực tiếp</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 7, backgroundColor:'#FFF'}}>
        <SafeAreaView style={styles.container}>
          <FlatList 
          data={DATA} 
          numColumns={3} key={3} 
          keyExtractor={item => item.name} 
          renderItem={renderXoSo} />
        </SafeAreaView>
      </View>
      {/* thanh dưới */}
      <View
        style={{flex: 0.7, backgroundColor: '#112951', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('userScreen');
              }}
              style={{backgroundColor: '#112951', borderRadius: 25}}>
                <FontAwesome name={'user'} solid style={{color: '#fff', marginHorizontal: 25}} size={26} />
              <Text style={{fontSize: 16, textAlign: 'center', color: '#fff'}}>Cá nhân</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 2}}>
            <FontAwesome name={'comment'} style={{color: '#fff', marginHorizontal: 25}} size={26} />
            <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>Thảo luận</Text>
          </View>

          <View style={{flex: 2}}>
            <FontAwesome name={'books'} solid style={{color: '#fff', marginHorizontal: 25}} size={26} />
            <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>Mẹo</Text>
          </View>

          <View style={{flex: 2}}>
            <FontAwesome name={'phone'} solid style={{color: '#fff', marginHorizontal: 25}} size={26} />
            <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>Thắc mắc</Text>
          </View>

          <View style={{flex: 2}}>
            <FontAwesome name={'bars'} solid style={{color: '#fff', marginHorizontal: 25}} size={26} />
            <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>Cài đặt</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrangChu;

const styles = StyleSheet.create({
  anhnen: {
    height: 10,
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  xoso: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 10,
  },
});
