import React from 'react';
import { View } from 'react-native';
import CustomButton from '../../Elements/CustomButton/Index';
import Styles from './Styles';
import { setValueBasedOnWidth,setValueBasedOnHeight } from '../../utils/utils';
export default class Menu extends React.Component {
    
    onHome = () => {
        this.props.navigation.navigate('Home')
    }
    onPress = () => {
        alert('pressed')
    }
    onPolicy = () => {
        this.props.navigation.navigate('Policy')
    }
    onViolation = () => {
        this.props.navigation.navigate('Violation')
    }
   
    onSend = () => {
        this.props.navigation.navigate('ForwardScreen')
    }
    render() {
        return (
            <View style={{flex:1, marginTop:setValueBasedOnHeight(3)}}>
            <View style={Styles.buttons}>
                  <CustomButton
                    title='PRINT'
                    onButtonPress={this.onPress}
                    // disabled={!this.props.isSelected}
                    style={{width:setValueBasedOnWidth(40)}} 
                />
                 <CustomButton
                    title='FORWARD'
                    // disabled={!this.props.isSelected}
                    onButtonPress={this.onSend}
                    style={{width:setValueBasedOnWidth(40)}}
                />
                </View>
                <View style={Styles.buttons}>
                <CustomButton
                    // disabled={!this.props.isSelected}

                    title='INSURANCE'
                    onButtonPress={this.onPolicy}
                    style={{width:setValueBasedOnWidth(40)}}
                />
                <CustomButton
                    // disabled={!this.props.isSelected}

                    title='VIOLATIONS'
                    onButtonPress={this.onViolation}
                    style={{width:setValueBasedOnWidth(40)}}
                />
                </View>
                <View style={{flex:1}}>
                <CustomButton
                    title='BACK'
                    onButtonPress={this.onHome}
                    style={{width:setValueBasedOnWidth(85)}}
                />
                </View>
                </View>
          
            
        )   
    
    }
}
