import React from 'react';
import { View, Button, Text, FlatList, TouchableOpacity, ActivityIndicator, NativeEventEmitter, NativeModules, Platform, PermissionsAndroid, AppState } from 'react-native';
import Styles from './Styles';
import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
import Footer from '../../Components/Footer/Index'
import Header from '../../Components/Header/Index'
import Separator from '../../Elements/seprator/index'
import { setValueBasedOnWidth, setValueBasedOnHeight } from '../../utils/utils';
export default class Scanned extends React.Component {
  constructor() {
    super()
    this.state = {
      isSelected: false,
      blEnable: true,
      scanning: false,
      peripherals: new Map(),
      appState: '',
      isLoading: true,
      ID: '',
      fix: ""

    }
    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
    this.handleStopScan = this.handleStopScan.bind(this);
    this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(this);
    this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {


    AppState.addEventListener('change', this.handleAppStateChange);

    BleManager.start({ showAlert: false });

    this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);
    this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan);
    this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedPeripheral);
    this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic);

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
        if (result) {
          this.enableBluetooth()
          console.log("Permission is OK");
        } else {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
            if (result) {
              this.enableBluetooth()
              console.log("User accept");
            } else {
              console.log("User refuse");
            }
          });
        }
      });
    }
  }
  handleAppStateChange(nextAppState) {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
        console.log('Connected peripherals: ' + peripheralsArray.length);
      });
    }
    this.setState({ appState: nextAppState });
  }
  componentWillUnmount() {
    this.handlerDiscover.remove();
    this.handlerStop.remove();
    this.handlerDisconnect.remove();
    this.handlerUpdate.remove();
  }
  handleDisconnectedPeripheral(data) {
    let peripherals = this.state.peripherals;
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      this.setState({ peripherals });
    }
    console.log('Disconnected from ' + data.peripheral);
  }
  handleUpdateValueForCharacteristic(data) {
    console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
  }
  handleStopScan() {
    this.setState({ isLoading: false })
    console.log('Scan is stopped');
    this.setState({ scanning: false });
  }
  startScan() {
    this.setState({ isLoading: true })
    BleManager.scan([], 5, false).then((res) => {
      console.log("scanning");
      this.setState({ scanning: true });
    });

  }
  connect = () => {
  
    // this.props.navigation.navigate('Profile', {
     

    // })
  }
  handleDiscoverPeripheral(peripheral) {
   

    // BleManager.connect(peripheral.id)
    // var peripherals = this.state.peripherals;
    // if (peripheral.name) {
    //   const name = peripheral.name
    //   const res = name.substr(0,2)
    //   if(res==="KA"){
    //     peripherals.set(peripheral.id, peripheral)
    //   }
    //  console.log(peripheral.name) 
    // }
    // this.setState( peripherals );
    var peripherals = this.state.peripherals;
    if (peripheral.name) {
     
      peripherals.set(peripheral.id, peripheral);
    }

    this.setState({ peripherals });


    
    console.log(peripherals)
  }
  enableBluetooth = async (value) => {
    await BleManager.enableBluetooth(true).then(() => {
      this.setState({ blEnable: true })
      this.startScan()

    })
      .catch((error) => {
        console.log(error)
      })
  }
  onScan = () => {
    this.startScan()
    this.setState({ isLoading: true })
  }
  renderItem = ({ item }) => {
    return (

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: setValueBasedOnWidth(1), padding: setValueBasedOnWidth(1), marginVertical: setValueBasedOnHeight(1) }}>
          <TouchableOpacity
            onPress={this.connect}>
            <Text style={{ fontSize: setValueBasedOnHeight(2), marginHorizontal: setValueBasedOnWidth(2), fontWeight: '800', color: 'black', textAlign: 'center' }}>{item.name}</Text>
          </TouchableOpacity>
        </View>
        <Separator />
      </View>
    );
  }
  onPress = () => {
    this.props.navigation.navigate('Menu')
  }
  render() {
    const list = Array.from(this.state.peripherals.values());
    return (
      <View style={Styles.container} >
        <Header
          backButtonTitle='SCAN'
          onClick={this.onPress}
        />
        <View style={Styles.viewStyle}>
          <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
            <Text style={{ fontSize: setValueBasedOnHeight(2), color: '#A9A9A9', marginHorizontal: setValueBasedOnWidth(1), padding: setValueBasedOnWidth(1), marginVertical: setValueBasedOnHeight(1) }}>Available Devices</Text>
            <TouchableOpacity
              onPress={this.onScan}
              style={{ marginHorizontal: setValueBasedOnWidth(1), padding: setValueBasedOnWidth(1), marginVertical: setValueBasedOnHeight(1) }}
            >
              <Text style={{ color: 'blue' }}>REFRESH</Text>
            </TouchableOpacity>
          </View>
          <Separator />
          {this.state.isLoading ? <ActivityIndicator size='large' color='black' /> :


            <View style={{ flex: 1 }}>
              {(list.length == 0) &&
                <View style={{ flex: 1, margin: 20 }}>
                  <Text style={{ textAlign: 'center' }}>No peripherals</Text>
                </View>
              }
              <FlatList
                data={list}
                renderItem={this.renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          }
        </View>
        <Footer />
      </View>
    );
  };
};
