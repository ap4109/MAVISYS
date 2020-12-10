import React from 'react';
import { Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import Styles from './Styles';
import CustomButton from '../../Elements/CustomButton/Index';
import Footer from '../../Components/Footer/Index';
import Header from '../../Components/Header/Index';
import { connect } from 'react-redux';
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            pin: '',
            showError:false
        }
    }
    checkField = () => {
        const { username, pin } = this.state
        if (username == '') {
            // alert('Please fill User Name')
            // return true
            this.setState({showError:true})
        } if (pin == '') {
            // alert('Please fill Pin')
            // return true
            this.setState({showError:true})

        }
        else { this.props.navigation.navigate('Menu') }
    }
    render() {
        return ( 
                <View style={Styles.container}>
                    <Header/>
                <KeyboardAvoidingView style={Styles.keyboard}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 10}
                enabled={Platform.OS === "ios" ? true : false} 
                >   
                <View style={Styles.viewStyle}>
                    <Text style={Styles.textStyle}> SIGN IN </Text>
                    <TextInput
                        style={Styles.inputStyle}
                        onChangeText={(value) => this.setState({ username: value })}
                        placeholder='USER NAME'
                        placeholderTextColor='#357EC7'
                    />
                {this.state.showError ? <Text style={{ fontSize: 14, color: 'red',marginLeft:20 }}>Please enter some data</Text>:null}

                    <TextInput
                        onChangeText={(value) => this.setState({ pin: value })}
                        style={Styles.inputStyle}
                        placeholder='PIN'
                        placeholderTextColor='#357EC7'
                        keyboardType='numeric'
                    />
                {this.state.showError ? <Text style={{ fontSize: 14, color: 'red', margin: 10 }}>Please enter some data</Text>:null}

                    <CustomButton
                        title='LOGIN'
                        onButtonPress={this.checkField}
                    />
                </View>
                </KeyboardAvoidingView>
                <Footer/>
                </View>  
        );
    };
};
const mapStateToProps = (state) => {
    return {

    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// };
export default connect(mapStateToProps, null)(Login)