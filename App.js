import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './app/redux/store';
import Navigation from './app/navigation';
import FlashMessage from 'react-native-flash-message';

import codePush from 'react-native-code-push';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
      <FlashMessage position="top" />
    </Provider>
  );
};

// let codePushOptions = {
//   checkFrequency: codePush.CheckFrequency.MANUAL,
//   // checkFrequency: codePush.CheckFrequency.ON_APP_START,
//   // installMode: codePush.InstallMode.IMMEDIATE,
// };

// function App() {
//   const [isLoadingComplete, setLoadingComplete] = useState < any > true;
//   const [isCodePushSync, setCodePushSync] = useState < any > false;
//   const [rootStore, setRootStore] = (useState < RootStore) | (undefined > undefined);

//   if (!rootStore || !isLoadingComplete || !isCodePushSync) {
//     // if (!rootStore || !isLoadingComplete) {
//     return (
//       <View style={{flex: 1, backgroundColor: color.white, alignItems: 'center', justifyContent: 'center'}}>
//         <Image source={require('../AppSoxo/app/assets/images/Splash.png')} />
//         {/* <CenterSpinner/> */}
//       </View>
//     );
//   } else {
//     return (
//       <View style={{flex: 1, backgroundColor: '#1A1334'}}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <RootStoreProvider value={rootStore}>
//           <IconRegistry icons={EvaIconsPack} />
//           <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
//             <AppNavigator />
//           </ApplicationProvider>
//         </RootStoreProvider>
//         <Toast config={toastConfig} />
//       </View>
//     );
//   }
// }

// export default codePush(codePushOptions)(App);

export default App;
