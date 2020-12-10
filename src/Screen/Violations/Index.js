import React from 'react';
import { Text, View, Image } from 'react-native';
import Styles from './Styles';
import CustomButton from '../../Elements/CustomButton/Index';
import Footer from '../../Components/Footer/Index'
import Header from '../../Components/Header/Index'
export default class Violations extends React.Component {
    onPress = () => {
        this.props.navigation.navigate('Menu')
    }
    render() {
        return (
            <View style={Styles.container} >
                <Header
                    backButtonTitle='VIOLATIONS'
                    onClick={this.onPress}
                />
                <View style={Styles.body}>
                <View style={Styles.viewStyle}>
                    <View style={Styles.textView}>
                        <Text style={Styles.textStyle}>Date</Text>
                        <Text style={Styles.textStyle}>Time</Text>
                        <Text style={Styles.textStyle}>Violations</Text>
                    </View>
                    <View style={Styles.viewlogoVio}>
                        <Image source={require('../../Image/logoVio.png')}
                            style={Styles.logoVio} />
                        <Text style={Styles.vioText}>NO VIOLATIONS</Text>
                    </View>
                    <CustomButton
                        title='OK'
                        onButtonPress={this.onPress}
                        style={{width:80}}
                    />
                </View>
                </View>
                <View style={Styles.footerView}>
                    <Footer />
                </View>
            </View>
        );
    };
};
