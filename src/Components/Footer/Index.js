import React from 'react';
import { Text, View, Image } from 'react-native';
import Styles from './Styles';
export default class Footer extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style = {Styles.upperText}>   Powered By:</Text>
                <View style= {Styles.logoView}>
                <Image style={Styles.logoStyle} source={require('../../Image/glogo.png')}/>
                <View style= {Styles.name}>
                <Text style= {Styles.nameStyle}>Galileo</Text>
                <Text style= {Styles.nameStyle}>Innovations</Text>
                <Text style= {Styles.nameStyle}>Pvt. Ltd.</Text>
                </View>
            </View>
            </View>
        )
    }
}     
