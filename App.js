import { createStackNavigator, createAppContainer, } from "react-navigation";
//import { SwitchNavigator } from 'react-navigation';
import Login from './src/loginFrom';
import SignUp from './src/signupFrom';
import Loading from './src/Loading';
import Main from './src/Main';
import RegisterNum from './src/RegisterNum';
import VerifiNum from './src/VerifiNum';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    ImageBackground,
 } from 'react-native';

const AppNavigator = createStackNavigator({
    SignUp: {
        screen: SignUp, 
    },
    // Loading: {
    //     screen: Loading, 
    // },
    
    Login: {
        screen: Login,
    },
    
    RegisterNum: {
        screen: RegisterNum, 
    },
    VerifiNum: {
        screen: VerifiNum, 
    },
    Main: {
        screen: Main,   
    },
});

const Navigation = createAppContainer(AppNavigator);
export default Navigation;