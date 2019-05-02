import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button, ImageBackground } from 'react-native';
import firebase from 'firebase';


export default class Main extends React.Component {
    state = { currentUser: null, errorMessage: null }
    static navigationOptions = { header: null };
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }


    render() {
    const { currentUser } = this.state
    return (
        <ImageBackground style={styles.container1} source={require('./component/img/bg.jpg')}>
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button 
                    title= "Logout" 
                    style = {styles.button}
                    onPress={this.handleLogout.bind(this)}
                />

            </View>
        </ImageBackground>
      
        );
    }
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
        alignItems: 'center',

    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
        alignSelf: 'stretch',
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        paddingTop: 20,
        padding: 20,
    },
})