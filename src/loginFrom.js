import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    ImageBackground,
 } from 'react-native';
 import firebase from 'firebase';


export default class loginFrom extends React.Component {

    static navigationOptions = { header: null };
    state = { email: '', password: '', errorMessage: null }
  
    handleLogin = () => {
    const { email, pasword } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pasword)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => alert("Enter valid Email && Password"))
  }

    render() {
        return (
            <ImageBackground style={style.container1} source={require('./component/img/bg.jpg')}>
                <View style={style.container}>
                    <Text style={style.header}>- LOGIN -</Text>
                        {this.state.errorMessage &&
                        <Text style={style.header}>
                        {this.state.errorMessage}
                        </Text>}
                    <TextInput 
                        placeholder='Email'
                        autoCapitalize="none"
                        placeholderTextColor='rgba(0,0,0,1)'
                        underlineColorAndroid={'transparent'}
                        keyboardType= 'email-address'
                        style={style.textInput} 
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        />

                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor='rgba(0,0,0,1)'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        underlineColorAndroid={'transparent'}
                        style={style.textInput} 
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        /> 

                    
                    <TouchableOpacity
                        style={style.button} 
                        onPress={this.handleLogin} >

                         <Text style={style.buttontext}>Login</Text>
                        </TouchableOpacity>
                        
                    <Button 
                        style={style.button}
                        title="Don't have an account? Sign Up"
                        onPress={() => this.props.navigation.navigate('SignUp')} 

                        />
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
    button: {
        alignSelf: 'stretch',
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        paddingTop: 20,
        padding: 20,
    },
    buttontext: {
        color: '#fff',
        fontSize: 18,
    },
    header: {
        fontSize: 38,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 80,
    }

});
