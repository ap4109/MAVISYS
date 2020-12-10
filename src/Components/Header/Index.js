import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
export default class Header extends React.Component {
    renderComponent = () => {
        if (this.props.backButtonTitle) {
            return (
                <TouchableOpacity style={Styles.TouchView} onPress = {this.props.onClick}>
                    <Image style={Styles.backButton}
                        source={require('../../Image/back.png')}
                    />
                    <Text style={Styles.textStyle}>{this.props.backButtonTitle}</Text>
                </TouchableOpacity>
            )
        }
        return (<Image style={Styles.imageLeft}
            source={require('../../Image/logo.png')}
        />
        )
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.logoView}>
                    {this.renderComponent()}
                    <Image style={Styles.imageRight}
                        source={require('../../Image/logo.png')}
                    />
                </View>
            </View>
        )
    }
}     
