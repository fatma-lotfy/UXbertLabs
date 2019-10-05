import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SplashScreen from './SplashScreen';
import Main from './Main';
import APIPage from './APIPage'

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
        
        navigationOptions: () => ({
            headerTintColor:'#547980',
            // header: null,
            // headerVisible: false,
            // headerBackTitle: null
          })
    },

})
export default createAppContainer(navigation);