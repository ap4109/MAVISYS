import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./Redux/Reducer";
import Login from './src/Screen/Login/Index';
import Menu from './src/Screen/MenuScreen/Index2';
import Violations from './src/Screen/Violations/Index';
import Insurance from './src/Screen/Insurance/Index';
import Scan from './src/Screen/Scan/Index';
import Forward from './src/Screen/Forward/Index';
import Logs from './src/Screen/Logs/Index';
import Profile from './src/Screen/Profile';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const Stack = createStackNavigator();
class App extends React.Component{
  render(){
  return(
    <Provider store ={store}>
      <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name= 'Home' component ={Login} />
      <Stack.Screen name= 'Menu' component ={Menu} />
      <Stack.Screen name= 'Violation' component ={Violations} />
      <Stack.Screen name= 'Policy' component ={Insurance} />
      <Stack.Screen name= 'Scan' component ={Scan} />
      <Stack.Screen name= 'ForwardScreen' component ={Forward} />
      <Stack.Screen name= 'Log' component ={Logs} />
      <Stack.Screen name= 'Profile' component ={Profile} />


    </Stack.Navigator>
  </NavigationContainer>
    </Provider>
  )
}
}
export default App;