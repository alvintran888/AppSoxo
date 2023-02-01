/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import {Colors, Fonts, Images} from '@app/themes';
import SQLiteHelper from '@app/utils/SQLiteHelper';
import {Header} from '@app/components';

const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

const RenderItem = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{paddingVertical: 10, marginStart: 10, borderBottomColor: Colors.gray60, borderBottomWidth: 0.5}}
      onPress={() => {
        navigation.navigate('');
      }}>
      <Text style={{fontSize: 14, color: Colors.lineblack}} numberOfLines={1}>
        {props?.item?.Name ?? ''}
      </Text>
    </TouchableOpacity>
  );
};

const ListLoaiDichVuScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tmp = async () => {
      setIsLoading(true);
      // 1.open database
      const {res: sqLite, err} = await sqliteH.open();
      const {res, errr} = await sqliteH.selectItems('tbLoaiDichVu', '*');
      setData(res ?? []);
      setIsLoading(false);
    };
    tmp();
  }, []);

  const keyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(({item}) => <RenderItem item={item} />, []);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Header
        title="Loại hình dịch vụ"
        isStack={true}
        RightComponent={() => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
            }}
            onPress={() => {}}>
            <FontAwesome name={'plus'} color={Colors.white} size={24} duotone />
          </TouchableOpacity>
        )}
      />
      <View style={{flex: 1}}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fb8c00" style={{flex: 1, justifyContent: 'center'}} />
        ) : (
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={() => <Text style={{textAlign: 'center', color: '#50565B', margin: 10}}>Không có dữ liệu</Text>}
            keyExtractor={keyExtractor}
          />
        )}
      </View>
    </View>
  );
};

export default ListLoaiDichVuScreen;

const styles = StyleSheet.create({});
