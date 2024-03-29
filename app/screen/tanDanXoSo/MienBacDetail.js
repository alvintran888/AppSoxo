import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScroolView, TouchableOpacity, FlatList, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Header} from '@app/components';
import moment from 'moment'; //hàm xư lý datetime
import axios from 'axios';

const MienBacDetail = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [maDb, setMaDb] = useState([]);
  const [dB, setDB] = useState([]);

  // const _renderItem = ({item}) => {
  //     return (
  //        <TouchableOpacity style={{flexDirection:'row', margin: 10, padding:10}}>
  //             {/* image */}
  //             <View style={{flex:1, }}>

  //             <Image source={{uri: item.avatar}} style={{height:100, width:120, borderRadius:20}}/>

  //             </View>
  //                 {/* ten */}
  //             <View style={{flex: 2 }}>
  //                 <View style={{ flex:0.3, flexDirection: 'row', marginLeft: 15, marginTop: 5,}}>
  //                     <Text style={{ fontSize: 20, paddingRight: 5 }}>{item.first_name}</Text>
  //                     <Text style={{ fontSize: 20 }}>{item.last_name}</Text>
  //                 </View>

  //                 <View style={{flex:3, marginLeft: 15,}}>
  //                 <Text style={{ fontSize: 13 }}>Email:{item.email}</Text>
  //                 </View>
  //             </View>
  //             {/* email */}

  //       </TouchableOpacity>

  //     );
  //   };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.xoso.me/app/json-kq-mienbac?name=KQXS&v=2&ngay_quay=2023-03-12');
      const json = await res.json();
      setMaDb(json.data.lotData.MaDb);
      console.log(json.data.lotData.MaDb);
      setDB(json.data.lotData.DB);
      console.log(json.data.lotData.DB);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios({
  //       method: 'get',
  //       url: 'https://api.xoso.me/app/json-kq-province?name=KQXS&v=2&province_id=9&ngay_quay=2022-10-26'
  //     }).then((res) => {
  //       console.log(res.data);
  //     })
  //   };

  //   fetchData();
  // }, [])

  return (
    <View style={{flex: 1}}>
      <Header title={'Xổ số Miền Bắc'} backgroundColor={'#112951'} leftComponent={'true'} isStack={'true'} />

      <View style={{flex: 1}}>
        <View style={{height: 80, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: 'red'}}>Xổ số Miền Bắc (Hà Nội)</Text>
          </View>

          <View>
            <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 50}} onPress={() => setOpen(true)}>
              <Text style={{}}>{moment(date).format('YYYY-MM-DD')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 1, backgroundColor: '#CFCFCF'}} />

        {/* MaDb */}
        <View style={{height: 40, width: '100%', backgroundColor: '#F9F9F9', flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>{/* <Text>ĐB</Text> */}</View>

          <View style={{height: 50, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            {/* <Text style={styles.MaDb}>1PU</Text>
                <Text style={styles.MaDb}>2PU</Text>
                <Text style={styles.MaDb}>3PU</Text>
                <Text style={styles.MaDb}>4PU</Text>
                <Text style={styles.MaDb}>5PU</Text>
                <Text style={styles.MaDb}>6PU</Text> */}

            {maDb.map((item, index) => (
              <Text style={styles.MaDb}>{item}</Text>
            ))}
          </View>
        </View>

        <View style={{height: 1, backgroundColor: '#ACACAC'}} />

        {/* G.ĐB */}
        <View style={{height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.ĐB</Text>
          </View>

          <View style={{height: 60, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            {dB.map((item, index) => (
              <Text style={{fontSize: 35, fontWeight: 'bold', color: 'red'}}>{item}</Text>
              // <Text style={styles.MaDb}>{item}</Text>
            ))}
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />

        {/* G.1 */}
        <View style={{height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.1</Text>
          </View>

          <View style={{height: 60, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>51904</Text>
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />

        {/* G.2 */}
        <View style={{height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.2</Text>
          </View>

          <View style={{height: 60, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={styles.ketqua}>86833</Text>
            <Text style={styles.ketqua}>22870</Text>
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />

        {/* G.3 */}
        <View style={{height: 100, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.3</Text>
          </View>

          <View style={{height: 100, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={styles.ketqua}>85621</Text>
            <Text style={styles.ketqua}>16256</Text>
            <Text style={styles.ketqua}>18746</Text>
            {/* <Text style={styles.ketqua}>84156</Text>
                <Text style={styles.ketqua}>68556</Text>
                <Text style={styles.ketqua}>38891</Text> */}
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />

        {/* G.4 */}
        <View style={{height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.4</Text>
          </View>

          <View style={{height: 60, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={styles.ketqua}>3826</Text>
            <Text style={styles.ketqua}>9033</Text>
            <Text style={styles.ketqua}>6756</Text>
            <Text style={styles.ketqua}>8348</Text>
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />

        {/* G.5 */}
        <View style={{height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.5</Text>
          </View>

          <View style={{height: 60, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={styles.ketqua}>9234</Text>
            <Text style={styles.ketqua}>5163</Text>
            <Text style={styles.ketqua}>4061</Text>
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />

        {/* G.6 */}
        <View style={{height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.6</Text>
          </View>

          <View style={{height: 60, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={styles.ketqua}>617</Text>
            <Text style={styles.ketqua}>012</Text>
            <Text style={styles.ketqua}>182</Text>
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />

        {/* G.7 */}
        <View style={{height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>G.7</Text>
          </View>

          <View style={{height: 60, width: 1, backgroundColor: '#ACACAC'}}></View>

          <View style={{flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={styles.g7}>29</Text>
            <Text style={styles.g7}>54</Text>
            <Text style={styles.g7}>10</Text>
            <Text style={styles.g7}>42</Text>
          </View>
        </View>

        <View style={{height: 1.5, backgroundColor: '#ACACAC'}} />
      </View>
    </View>
  );
};
export default MienBacDetail;
const styles = StyleSheet.create({
  ketqua: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },

  g7: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'red',
  },

  MaDb: {
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
  },
});
