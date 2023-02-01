// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import TrangChu from './TrangChu';

// import { colors } from '@app/global/style';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import { color } from 'react-native-reanimated';

// const BottomTabXoSo = () => {

//     const Tab = createBottomTabNavigator();
//     return (
//         <Tab.Navigator>

//             <Tab.Screen options={{
//                 headerShown: false, tabBarLabel: 'Trang Chủ', tabBarLabelStyle: { color: color.buttons }, tabBarIcon: ({ focused, tintColor, size }) => (
//                     <View>
//                         <FontAwesome5Icon
//                         name = "home"
//                         size = "22"
//                         color={focused ? color.buttons : '#757E83'}
//                         solid={focused ? true : false}
//                         />
//                     </View>
//                 ), //ngoặc dòng 18 (headerShown)
//             }} name = "Trang Chủ" component={TrangChu} />

//             {/*chức năng 1 ở trên nối sang trang chủ */}

//             <Tab.Screen option={{
//                 headerShown: false, tabBarLabel: 'Miền Bắc', tabBarLabelStyle: { color: color.buttons }, tabBarIcon: ({ focused, tintColor, size }) => (
//                 <View>
//                     <FontAwesome5Icon
//                         name="archway"
//                         size={22}
//                         color={focused ? colors.buttons : '#757E83'}
//                         solid={focused ? true : false}
//                     />
//                 </View>
//               ),

//             }}name = " Miền Bắc " component={MienBac} />

//             {/*chức năng 1 nối sang file Miền  Bắc */}

//             <Tab.Screen option = {{
//                 headerShown: false, tabBarLabel: 'Miền Nam', tabBarLabelStyle: { color: color.buttons }, tabarIcon: ({ focused, tintColor, size }) => (
//                     <View>
//                         <FontAwesome5Icon
//                             name = "ethernet"
//                             size={22}
//                             color={focused ? colors.buttons : '#757E83'}
//                             solid={focused ? true : false}
//                         />
//                     </View>
//                 )
//             }}/>


//         </Tab.Navigator>
//     )

// }

// export default BottomTabXoSo

// const styles = StyleSheet({

// })


