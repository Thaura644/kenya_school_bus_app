import { createStackNavigator } from "@react-navigation/stack"
import { createAppContainer } from "react-navigation"
import  Dashboard from '../Dashboard';
import LoginScreen from '../LoginScreen'


const screens = {
    Dashboard:{
        screen: Dashboard
    },
    Login:{
        screen: LoginScreen
    }
}

const HomeStack = createStackNavigator(screen);

export default  createAppContainer(HomeStack);