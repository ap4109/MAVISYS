import React from 'react';
import { Image, Text, View} from 'react-native';
import Styles from './Styles';
import Footer from '../../Components/Footer/Index'
import Header from '../../Components/Header/Index'
import CustomButton from '../../Elements/CustomButton/Index';
export default class Menu extends React.Component {

  onScan = () => {
    this.props.navigation.navigate('Scan')
  }
  onLog = () => {
    this.props.navigation.navigate('Log')
  }
  render() {
    return (
      <View style={Styles.container}>
        <Header />
        <Image source={require('../../Image/glogo.png')}
          style={Styles.glogo} />
        <View style={Styles.logo3view}>
          <View style={Styles.ImageView}>
            <Image source={require('../../Image/logo3.png')}
              style={Styles.logo3} />
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.textStyle1}>  Say</Text>
                <Text style={Styles.textStyle2}> No</Text>
                <Text style={Styles.textStyle1}> to Duplicate, Fake,</Text>
              </View>
              <Text style={Styles.textStyle}>Counterfeit & Spurious Products</Text>
              <Text style={Styles.textStyle}>  (Issued in Public interest)</Text>
            </View>
          </View>
        </View>
      
          <View style={Styles.infoView}>
            <Text style={Styles.infoTextStyle}>SCAN to check the</Text>
            <Text style={Styles.infoTextStyle}>vehicle information</Text>
    
        </View>

        <View style={Styles.buttonView}>
          <CustomButton
            title='SCAN'
            onButtonPress={this.onScan}
            style={Styles.scanButton}
          />
          <CustomButton
            title='SCAN LOGS'
            onButtonPress={this.onLog}
            style={Styles.scanButton}
          />
        </View>

      <Footer />
      </View >
    )
  }
}



// import React from 'react';
// import { Image, Text, View, TouchableOpacity, NativeEventEmitter, NativeModules, Platform, PermissionsAndroid, AppState, FlatList, SafeAreaView } from 'react-native';
// import Styles from './Styles';
// import BleManager, { enableBluetooth } from 'react-native-ble-manager';
// import Separator from '../../Elements/seprator';
// import Footer from '../../Components/Footer/Index'
// import Header from '../../Components/Header/Index'
// const BleManagerModule = NativeModules.BleManager;
// const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
// import CustomButton from '../../Elements/CustomButton/Index';
// export default class Menu extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       blEnable: false,
//       scanning: false,
//       peripherals: new Map(),
//       appState: ''
//     }
//     this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
//     this.handleStopScan = this.handleStopScan.bind(this);
//     this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(this);
//     this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(this);
//     this.handleAppStateChange = this.handleAppStateChange.bind(this);
//   }
//   componentDidMount() {

//     AppState.addEventListener('change', this.handleAppStateChange);

//     BleManager.start({ showAlert: false });

//     this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);
//     this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan);
//     this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedPeripheral);
//     this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic);

//     if (Platform.OS === 'android' && Platform.Version >= 23) {
//       PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
//         if (result) {
//           console.log("Permission is OK");
//         } else {
//           PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
//             if (result) {
//               console.log("User accept");
//             } else {
//               console.log("User refuse");
//             }
//           });
//         }
//       });
//     }
//   }
//   handleAppStateChange(nextAppState) {
//     if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
//       console.log('App has come to the foreground!')
//       // BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
//       //   console.log('Connected peripherals: ' + peripheralsArray.length);
//       // });
//     }
//     this.setState({ appState: nextAppState });
//   }
//   componentWillUnmount() {
//     this.handlerDiscover.remove();
//     this.handlerStop.remove();
//     this.handlerDisconnect.remove();
//     this.handlerUpdate.remove();
//   }
//   handleDisconnectedPeripheral(data) {
//     let peripherals = this.state.peripherals;
//     let peripheral = peripherals.get(data.peripheral);
//     if (peripheral) {
//       peripheral.connected = false;
//       peripherals.set(peripheral.id, peripheral);
//       this.setState({ peripherals });
//     }
//     console.log('Disconnected from ' + data.peripheral);
//   }
//   handleUpdateValueForCharacteristic(data) {
//     console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
//   }
//   handleStopScan() {
//     console.log('Scan is stopped');
//     this.setState({ scanning: false });
//   }
//   startScan() {
//     if (!this.state.scanning) {
//       //this.setState({peripherals: new Map()});
//       BleManager.scan([], 20  , true).then(() => {
       
//         console.log('Scanning...');
//         this.setState({ scanning: true });
//       });
//     }
//   }
//   handleDiscoverPeripheral(peripheral) {
//     var peripherals = this.state.peripherals;
//     console.log('Got  peripheral', peripheral);
//     if (!peripheral.name) {
//       peripheral.name =  peripheral.name
//     }
    
//     peripherals.set(peripheral.id, peripheral);
//     this.setState({ peripherals });
//     const list = Array.from(this.state.peripherals.values());
//     this.props.navigation.navigate('Scan', { key: list })
//   }
//   test(peripheral) {
//     if (peripheral){
//       if (peripheral.connected){
//         BleManager.disconnect(peripheral.id);
//       }else{
//         BleManager.connect(peripheral.id).then(() => {
//           let peripherals = this.state.peripherals;
//           let p = peripherals.get(peripheral.id);
//           if (p) {
//             p.connected = true;
//             peripherals.set(peripheral.id, p);
//             this.setState({peripherals});
//           }
//           console.log('Connected to ' + peripheral.id);
//         }).catch((error) => {
//           console.log('Connection error', error);
//         });
//       }
//     }
//   }
//   enableBluetooth = async (value) => {
//     await BleManager.enableBluetooth(true).then(() => {
//       this.setState({ blEnable: true })

//       this.startScan()
//     })
//       .catch((error) => {
//         // this.props.navigation.navigate('Scan')

//         console.log(error)
//       })
//   }
//   onScan = () => {
//     this.enableBluetooth()
//   }
//   onLog = () => {
//     this.props.navigation.navigate('Log')
//   }
//   render() {
//     return (
//       <View style={Styles.container}>
//         <Header />
//         <Image source={require('../../Image/glogo.png')}
//           style={Styles.glogo} />
//         <View style={Styles.logo3view}>
//           <View style={Styles.ImageView}>
//             <Image source={require('../../Image/logo3.png')}
//               style={Styles.logo3} />
//             <View>
//               <View style={{ flexDirection: 'row' }}>
//                 <Text style={Styles.textStyle1}>  Say</Text>
//                 <Text style={Styles.textStyle2}> No</Text>
//                 <Text style={Styles.textStyle1}> to Duplicate, Fake,</Text>
//               </View>
//               <Text style={Styles.textStyle}>Counterfeit & Spurious Products</Text>
//               <Text style={Styles.textStyle}>  (Issued in Public interest)</Text>
//             </View>
//           </View>
//         </View>
      
//           <View style={Styles.infoView}>
//             <Text style={Styles.infoTextStyle}>SCAN to check the</Text>
//             <Text style={Styles.infoTextStyle}>vehicle information</Text>
    
//         </View>

//         <View style={Styles.buttonView}>
//           <CustomButton
//             title='SCAN'
//             onButtonPress={this.onScan}
//             style={Styles.scanButton}
//           />
//           <CustomButton
//             title='SCAN LOGS'
//             onButtonPress={this.onLog}
//             style={Styles.scanButton}
//           />
//         </View>

//       <Footer />
//       </View >
//     )
//   }
// }
