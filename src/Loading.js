import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class Loading extends React.Component {
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

    // componentDidMount() {
    //     firebase.auth().onAuthStateChanged(user => {
    //       // this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    //       this.props.navigation.navigate('SignUp')
    //     })
    //   }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})