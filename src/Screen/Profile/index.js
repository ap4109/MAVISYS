import React from 'react';
import { View, Text, Image } from 'react-native'
import Styles from './Styles';
import Menu from '../MenuScreen/Index1'
import Footer from '../../Components/Footer/Index'
import Header from '../../Components/Header/Index'
import Separator from '../../Elements/seprator/index'
import { setValueBasedOnHeight, setValueBasedOnWidth } from '../../utils/utils';
export default class Profile extends React.Component {
    onPress=()=>{
        this.props.navigation.navigate('Scan')
    }
    
    render() {
     
      const data = this.props.route.params.data
      console.log(data)
        return (
            <View style={Styles.container} >
            <Header
                    backButtonTitle='PROFILE'
                    onClick={this.onPress}
                />
                <View style={Styles.viewStyle}>
                   <View style={Styles.logo3view}>
                     
                       
          <View style={Styles.ImageView}>
            <Image source={require('../../Image/logo3.png')}
              style={Styles.logo3}
              resizeMode='contain'
              />
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.textStyle1}>  Say</Text>
                <Text style={Styles.textStyle2}> No</Text>
                <Text style={Styles.textStyle1}> to Duplicate, Fake,</Text>
              </View>
              <Text style={Styles.textStyle}>Counterfeit & Spurious Products</Text>
              <Text style={Styles.textStyle}>  (Issued in Public interest)</Text>
            </View>
          </View>
        </View>
              <Separator />
              <Text>fr78r78r{data}</Text>
              <View style={{flex:1, justifyContent:'space-around', flexDirection:'row'}}>
                  <Text>image</Text>
              <View style={{marginVertical:setValueBasedOnHeight(2)}}>
                  <Text>Name</Text>
                  <Text>DL No.</Text>
                  <Text>Valid Till</Text>
              </View>
              </View>
              <Separator />
              <View style={{flex:1}}>
              <Image source={require('../../Image/images.jpg')}
              style={{flex:1, width:setValueBasedOnWidth(90)}}
              resizeMode='contain'
              />
                  <Separator />
                  <View style={{justifyContent:'space-around', flexDirection:'column', flex:1, marginVertical:setValueBasedOnWidth(1), marginHorizontal:setValueBasedOnWidth(2)}}>
                  <Text>ENUM</Text>
                  <Text>CNUM</Text>
                  <Text>RNUM</Text>
                  <Text>MOBILE</Text>
                  <Text>YEAR</Text>
                  </View>
              </View>
              <Separator />
              <View style={{flex:1}}>
              <Menu {...this.props}/>
              </View>
               
                </View>
                <Footer />
            </View>
        )
    }
}