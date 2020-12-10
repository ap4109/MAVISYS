import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import CustomButton from '../../Elements/CustomButton/Index';
import Footer from '../../Components/Footer/Index'
import Header from '../../Components/Header/Index'
export default class Scan extends React.Component {
    onPress = () => {
        this.props.navigation.navigate('Menu')
    }

    render() {
        return (
            <View style={Styles.container} >
                <Header
                    backButtonTitle='SCAN LOGS'
                    onClick={this.onPress}
                />
                <View style={Styles.body}>
                <View style={Styles.viewStyle}>
                    <CustomButton
                        title='OK'
                        onButtonPress={this.onPress}
                    />
                </View>
                </View>
                <Footer />
            </View>

        );
    };
};
