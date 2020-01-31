import { createStackNavigator } from "react-native-stack";
import { createAppContainer } from "react-navigation";
import Home from './screens/homepage';
import BirdDetails from '../screens/birdDetails';

const screens = {
    Home:{
        screen: Home
    },
    BirdDetails: {
        screen: BirdDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);