import React from 'react';
import {View, StyleSheet, } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
function Separator(props){
    return(
      <View style = {styles.separator}/>
    )
};
const styles = StyleSheet.create({
    separator:{
        
         borderTopWidth:1,
         borderColor: '#778899',
         marginHorizontal: setValueBasedOnWidth(2)
         
    }
})
export default Separator;