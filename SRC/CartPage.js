import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { element } from 'prop-types';

export default class CartPage extends Component {
  static navigationOptions =({ navigation }) =>  {
    return{
      headerTintColor:'#547980',
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      cartItems :[]
    };
  }
  componentDidMount(){
    const cartItems = this.props.navigation.getParam('cart',[])
    this.setState({cartItems :cartItems})
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexDirection:"column", justifyContent:"space-between" }}>  
        <View style ={styles.Container}>
          <View style={{paddingHorizontal:10}}>
            {this.state.cartItems.map(user =>(
              <View key={user.id}>
                <UserCardDetails user={user}/>
              </View>
              ))
            }
          </View>
        </View>
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },  
});
