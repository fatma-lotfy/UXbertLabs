import React, { Component } from 'react';
import { View, Text , StyleSheet , Dimensions ,Image } from 'react-native';

export default class SplashScreen extends Component {

  componentDidMount(){
      setTimeout(() => {
         this.props.navigation.navigate('Main');
      }, 2000);
    }
 

  render() {
    return (
      <View style = {styles.container}>
        <Image
            style={styles.logo}
            source= {require('../assets/Logo.png')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height:Dimensions.get('window').height, 
      width:Dimensions.get('window').width
    },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 200,
    },
  });


