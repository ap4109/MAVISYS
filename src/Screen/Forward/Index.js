import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Styles from './Styles';
import CustomButton from '../../Elements/CustomButton/Index';
import Footer from '../../Components/Footer/Index'
import Header from '../../Components/Header/Index'
import Separator from '../../Elements/seprator/index'
import CheckBox from '@react-native-community/checkbox';
import { setValueBasedOnHeight, setValueBasedOnWidth } from '../../utils/utils';
const USER =[
    {
      id: 1,
      Name: 'RAHUL',
      Contact: '9839687990'

    },
    {
        id: 2,
        Name: 'BADRI NATH',
        Contact:'9976574567'

      },
      {
        id: 3,
        Name: 'PRADEEP',
        Contact: '9874567890'

      },
      {
        id: 4,
        Name: 'PRAVIN',
        Contact: '7359876134'

      },
      {
        id: 5,
        Name: 'PRASAD',
        Contact: '9812763489'

      }
      
]
export default class Forward extends React.Component {
    
   
    onPress = () => {
        this.props.navigation.navigate('Scan')
    }
    renderItem({item}) {
        console.log(item)
        return(
    
    
    <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: setValueBasedOnHeight(7), flex: 1, backgroundColor: '#c2c2d6', marginHorizontal: setValueBasedOnWidth(2), marginVertical: setValueBasedOnHeight(1) }}>
        <View style={{justifyContent: 'center'}}>
      <Text style={{ fontSize: 20, marginHorizontal: setValueBasedOnWidth(2), fontWeight: 'bold', color: '#357EC7' }}>{item.Name}</Text>
      <Text  style={{ fontSize: 17, marginHorizontal: setValueBasedOnWidth(2), color: '#357EC7',alignSelf: 'center' }}>{item.Contact}</Text>
      </View>
      <CheckBox
        style={{ alignSelf: 'center', marginHorizontal: setValueBasedOnWidth(2) }}
        tintColors={{ true: '#0A5DF0', false: 'black' }}
        // onValueChange={()=>{
        //   this.setState({
        //     isSelected:!this.state.isSelected
        //   })
          
        // }}
        />
        
    </View>
    <Separator />

  </View>
    )
        }
    render() {
        return (
            <View style={Styles.container} >
                <Header
                    backButtonTitle='FORWARD '
                    onClick={this.onPress}
                />
                <View style={Styles.viewStyle}>
                <FlatList
                data ={USER}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id.toString()}
                />
                

                    <CustomButton
                        title='SEND'
                        onButtonPress={this.onPress}
                    />
                </View>
                <Footer />
            </View>
        );
    };
};
