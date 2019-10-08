import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SplashScreen from './SplashScreen';
import Main from './Main';
import APIPage from './APIPage'
import CartPage from './CartPage'

const navigation = createStackNavigator({
    SplashScreen :{
        screen: SplashScreen,
        headerMode: "none",
        navigationOptions: () => ({
            header: null,
            headerVisible: false,
            headerBackTitle: null
          })
    },
    Main :{
        screen : Main,
        headerMode: "none",
        navigationOptions: () => ({
            header: null,
            headerVisible: false,
            headerBackTitle: null
          })
    },
    APIPage :{
        screen : APIPage,
    },
    CartPage :{
        screen : CartPage,
    },

})
export default createAppContainer(navigation);