import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';

const HomeScreen = () => {
  const [language, setLanguage] = useState('VI');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* Dau */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image style={{resizeMode: 'cover'}} source={require('../../assets/images/logo_app.png')} />
          </TouchableOpacity>
        </View>
        {/* giua */}
        <View style={{flex: 3}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <View
              style={{
                backgroundColor: '#D6D6D6',
                height: 40,
                width: 90,
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              {/* VIETNAM */}
              <TouchableOpacity
                onPress={() => {
                  if (language == 'VI') {
                    setLanguage('EN');
                  } else {
                    setLanguage('VI');
                  }
                }}>
                <Text style={[language == 'VI' ? {color: 'blue', fontSize: 16, fontWeight: '700'} : {color: 'gray'}]}>VI</Text>
              </TouchableOpacity>
              <View style={{height: 10, width: 1, backgroundColor: 'gray'}} />
              {/* ENGLISH */}
              <TouchableOpacity
                onPress={() => {
                  if (language == 'VI') {
                    setLanguage('EN');
                  } else {
                    setLanguage('VI');
                  }
                }}>
                <Text style={[language == 'EN' ? {color: 'blue', fontSize: 16, fontWeight: '700'} : {color: 'gray'}]}>EN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* cuoi */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              height: '50%',
              width: '60%',
              backgroundColor: '#D6D6D6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Image
              style={{borderColor: 'lightblue', borderRadius: 20, opacity: 1, width: 25, height: 25}}
              source={require('../../assets/images/icon_chat_user.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* //////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////// */}

      {/* body */}
      <View style={{flex: 9, backgroundColor: '#E7E6E6'}}>
        <ScrollView style={{flexDirection: 'column', paddingTop: 20}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.welcomeText}>Chào mừng đến với chương trình </Text>
            <Text style={styles.welcomeText}>Hỗ Trợ Nhân Viên</Text>
          </View>

          <ScrollView horizontal={true} style={{marginTop: 20}}>
            <Image style={styles.banner} source={require('../../assets/images/Banner.png')} />
            <Image style={styles.banner} source={require('../../assets/images/Banner.png')} />
            <Image style={styles.banner} source={require('../../assets/images/Banner.png')} />
            <Image style={styles.banner} source={require('../../assets/images/Banner.png')} />
          </ScrollView>

          <View style={{paddingTop: 20, padding: 10}}>
            <Text style={styles.chuxanh}>Làm trắc nghiệm trực tuyến</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TracNghiemScreen');
              }}>
              <Image
                style={{height: 150, width: 350, borderRadius: 10}}
                source={require('../../assets/images/banner_trac_nghiem_vi.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{paddingTop: 20, padding: 10}}>
            <Text style={styles.chuxanh}>Tin tức</Text>
          </View>

          <ScrollView horizontal={true} style={{marginLeft: 10, marginRight: 10}}>
            <TouchableOpacity style={{flexDirection: 'column'}}>
              <Image style={styles.tintuc1image} source={require('../../assets/images/icon_tinTuc1.png')} />
              <View
                style={{
                  height: 70,
                  width: 240,
                  backgroundColor: 'white',
                  marginLeft: 10,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <Text style={styles.needtoknow}>NLP 2020 Intake - All you need to know</Text>
                <Text style={styles.day}>21/09/2023</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'column'}}>
              <Image style={styles.tintuc1image} source={require('../../assets/images/icon_tinTuc1.png')} />
              <View
                style={{
                  height: 70,
                  width: 240,
                  backgroundColor: 'white',
                  marginLeft: 10,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <Text style={styles.needtoknow}>NLP 2020 Intake - All you need to know</Text>
                <Text style={styles.day}>21/09/2023</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'column'}}>
              <Image style={styles.tintuc1image} source={require('../../assets/images/icon_tinTuc1.png')} />
              <View
                style={{
                  height: 70,
                  width: 240,
                  backgroundColor: 'white',
                  marginLeft: 10,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <Text style={styles.needtoknow}>NLP 2020 Intake - All you need to know</Text>
                <Text style={styles.day}>21/09/2023</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'column'}}>
              <Image style={styles.tintuc1image} source={require('../../assets/images/icon_tinTuc1.png')} />
              <View
                style={{
                  height: 70,
                  width: 240,
                  backgroundColor: 'white',
                  marginLeft: 10,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <Text style={styles.needtoknow}>NLP 2020 Intake - All you need to know</Text>
                <Text style={styles.day}>21/09/2023</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'column'}}>
              <Image style={styles.tintuc1image} source={require('../../assets/images/icon_tinTuc1.png')} />
              <View
                style={{
                  height: 70,
                  width: 240,
                  backgroundColor: 'white',
                  marginLeft: 10,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <Text style={styles.needtoknow}>NLP 2020 Intake - All you need to know</Text>
                <Text style={styles.day}>21/09/2023</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'column'}}>
              <Image style={styles.tintuc1image} source={require('../../assets/images/icon_tinTuc1.png')} />
              <View
                style={{
                  height: 70,
                  width: 240,
                  backgroundColor: 'white',
                  marginLeft: 10,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <Text style={styles.needtoknow}>NLP 2020 Intake - All you need to know</Text>
                <Text style={styles.day}>21/09/2023</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  welcomeText: {
    color: '#1D4C68',
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '700',
  },
  banner: {
    marginLeft: 10,
    marginRight: 10,
  },
  chuxanh: {
    color: '#3EC0F1',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
  },
  tintuc1image: {
    height: 150,
    width: 240,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  needtoknow: {
    color: 'black',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 5,
  },
  day: {
    marginLeft: 5,
    color: '#F7941E',
    fontSize: 13,
    fontWeight: '400',
  },
});
