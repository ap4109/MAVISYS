import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Styles from './Styles'
export default class CustomButton extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <LinearGradient colors={['#0033cc', '#87CEEB']} style={Styles.gradient}>
                    <TouchableOpacity style={[Styles.button, this.props.style]} onPress={this.props.onButtonPress}  disabled={this.props.disabled}>
                        <Text style={Styles.input}> {this.props.title} </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    };
};
