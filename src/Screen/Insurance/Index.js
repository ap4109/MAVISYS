import React from 'react';
import { Text, View, ScrollView,Image } from 'react-native';
import Styles from './Styles';
import CustomButton from '../../Elements/CustomButton/Index';
import Footer from '../../Components/Footer/Index'
import Header from '../../Components/Header/Index'
import { setValueBasedOnHeight, setValueBasedOnWidth } from '../../utils/utils';
export default class Insurance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
    onPress = () => {
        this.props.navigation.navigate('Menu')
    }
    render() {
        return (
            <View style={Styles.container} >
                <Header
                    backButtonTitle='INSURANCE'
                    onClick={this.onPress}
                />
                <Text style={Styles.textStyle}>Valid Till MM YYYY</Text>
                <View style={Styles.viewStyle}>
                    <ScrollView 
                    showsVerticalScrollIndicator= {false}>
                 
                    <Image
                        style={{height: setValueBasedOnHeight(75), width: setValueBasedOnWidth(90), resizeMode:'stretch', alignSelf: 'center'}}
                        source={{ uri: 'https://imgv2-2-f.scribdassets.com/img/document/358516803/original/a82627c3c6/1588129733?v=1' }}
                    />
                    <Image
                        style={{height: setValueBasedOnHeight(75), width: setValueBasedOnWidth(90), resizeMode:'stretch', alignSelf: 'center'}}
                        source={{ uri: 'https://imgv2-2-f.scribdassets.com/img/document/358516803/original/a82627c3c6/1588129733?v=1' }}
                    />
            
                    </ScrollView>
                </View>
                <CustomButton
                    title='OK'
                    onButtonPress={this.onPress}
                    
                />
                <Footer />
            </View>
        );
    };
};
