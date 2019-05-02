import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Button,
    ActivityIndicator,
 } from 'react-native';
 import firebase from 'firebase';

export default class signupFrom extends React.Component {

    state = { email: '', password: '', errorMessage: null, Loading: false }
    static navigationOptions = { header: null };
    
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBQO32rp4cGQ4Vqr5Ahq_ko7akNRH_-WKs",
            authDomain: "manager-2962b.firebaseapp.com",
            databaseURL: "https://manager-2962b.firebaseio.com",
            projectId: "manager-2962b",
            storageBucket: "manager-2962b.appspot.com",
            messagingSenderId: "594276826188"
          };
          firebase.initializeApp(config);
    }

    rendererSignUpBtn(){
        if(!this.state.Loading)
        {
            return (
            <TouchableOpacity 
                style={style.button}
                onPress={this.handleSignUp.bind(this)}
            >
                <Text style={style.buttontext}>Register</Text>
            </TouchableOpacity>);
        }
        return <ActivityIndicator size='large' />;
    }

    handleSignUp = () => {
        // if(this.state.email == null || this.state.email == "Email" )
        // {
        //     alert.message("Enter valid Email")
        // }
        this.setState({Loading: true});
        firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('RegisterNum'), this.setState({Loading: false}))
      .catch(error => alert("Enter valid Email && Password"),this.setState({ email: '', password: '', Loading: false}))
      }
      
    //static navigationOptions = { header: null };

    render() {
        return (
            <ImageBackground style={style.container1} source={require('./component/img/bg.jpg')}>
                <View style={style.container}>
                    <Text style={style.header}>- SIGNUP -</Text>
                        {/* {this.state.errorMessage &&
                        <Text style={style.header}>
                        {this.state.errorMessage}
                        </Text>} */}
                    <TextInput 
                        placeholder='Email'

                        placeholderTextColor='rgba(0,0,0,1)'
                        underlineColorAndroid={'transparent'}
                        style={style.textInput}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />

            

                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor='rgba(0,0,0,1)'
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                        style={style.textInput}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password} /> 

                    
                     {this.rendererSignUpBtn()}
                    
                    

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
