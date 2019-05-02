import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Button
 } from 'react-native';
 import firebase from 'firebase';

export default class RegisterNum extends React.Component {

    state = { Code: '', errorMessage: null }
    static navigationOptions = { header: null };
    

    VerifiyPhnumber = () => {
        confirmResult.confirm(this.state.Code)
        .then(() => this.props.navigation.navigate('VerifiNum'))
        .catch(error => alert("Enter valid Email && Password"))
    }
      
    //static navigationOptions = { header: null };

    render() {
        return (
            <ImageBackground style={style.container1} source={require('./component/img/bg.jpg')}>
                <View style={style.container}>
                    <Text style={style.header}>- Verify Ph-Number -</Text>
                        {/* {this.state.errorMessage &&
                        <Text style={style.header}>
                        {this.state.errorMessage}
                        </Text>} */}
                    <TextInput 
                        placeholder='Code'
                        placeholderTextColor='rgba(0,0,0,1)'
                        underlineColorAndroid={'transparent'}
                        keyboardType = 'numeric'
                        style={style.textInput}
                        onChangeText={Phnumber => this.setState({ Phnumber })}
                        value={this.state.Phnumber} />

                    <TouchableOpacity 
                        style={style.button}
                        onPress={this.VerifiyPhnumber.bind(this)}
                    >
                        <Text style={style.buttontext}>Verifiy</Text>
                    </TouchableOpacity>
                    {/* <Button 
                        style={style.button}
                        title="Already have an account? Login"
                        onPress={() => this.props.navigation.navigate('Login')} />    */}
                </View>
            </ImageBackground> 
        );
    }
}

const style = StyleSheet.create({
    container1: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
        alignItems: 'center',

    },
    wrapper: {
        flex: 1,
    },
    container: {
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },
    textInput: {
        fontSize: 22,
        padding: 20,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(225,225,225,0.8)',
        marginBottom: 20,
        
    },
    header: {
        fontSize: 38,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 80,
    },
    button: {
        alignSelf: 'stretch',
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        padding: 20,
    },
    buttontext: {
        color: '#fff',
        fontSize: 18,
    }

});
