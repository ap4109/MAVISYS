import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
   container: {
      paddingBottom: setValueBasedOnHeight(2),
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end', 
   },
   button: {
      borderWidth: setValueBasedOnWidth(0.4),
      width: setValueBasedOnWidth(30),
      height: setValueBasedOnWidth(10),
      borderColor: '#0AC2F0'
   },
   input: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      flex:1,
     alignSelf: 'center',
     justifyContent: 'center',
     paddingTop: setValueBasedOnWidth(2)
   
      
   },
})
export default Styles;