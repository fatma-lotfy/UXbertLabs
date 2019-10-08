import React, { Component } from 'react';
import { View, Text, StyleSheet ,ScrollView, Dimensions , TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from "react-native-elements";
import axios from 'axios';
import UserCardDetails from './UserCardDetails';
import AsyncStorage from '@react-native-community/async-storage';


export default class APIPage extends Component {
  static navigationOptions =({ navigation }) =>  {
    return{
      headerTintColor:'#547980',
      headerRight :(
        navigation.getParam('CartRendering')
      ),
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      cart : [],
    };
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.setState({ 
        users: response.data 
      });
    })
    .catch(error => {
      console.log(error);
    });   
    // const storedData= AsyncStorage.getItem('storedArr')
    // if (storedData !== null && storedData !== undefined) {
    //   this.setState({cart:storedData})
    // }
    this.props.navigation.setParams({CartRendering: this.CartRendering})
  }
  GoToCart =()=>{
    this.props.navigation.navigate('CartPage', {cart :this.state.cart})
  }
  CartRendering =()=>{
    return(
      <TouchableOpacity 
      style={{ flexDirection: 'row' }}
      onPress ={this.GoToCart}
      >
        <Text style ={{paddingRight :55}}>
          {this.state.cart.length}
        </Text> 
        <Icon
          name="shopping-cart"
          color="#547980"
          type="font-awesome"
          size={35}
          iconStyle={{
            position: 'absolute',
            marginRight: 5,
            flex: 1,
            paddingRight :50
          }}
      />
      </TouchableOpacity>
    )
  }
  // AddToCart = (item) => {
  //   this.state.cart.push(item);
  //   this.props.navigation.setParams({CartRendering: this.CartRendering});
  //   AsyncStorage.setItem('storedArr',JSON.stringify(item));
  //   this.setState({cart:storedArr});
  // }
     render() {
    return (
      <ScrollView contentContainerStyle={{ flexDirection:"column", justifyContent:"space-between" }}>  
        <View style ={styles.Container}>
          <View style={{paddingHorizontal:10}}>
              {this.state.users.map(user =>(
                <View key={user.id}>
                  <UserCardDetails user={user}/>
                  <Button 
                    title={"+ Add To Cart"} 
                    //onPress={this.AddToCart(user)} 
                    type="outline" 
                    buttonStyle={
                        {
                            borderColor:"#547980",
                            marginBottom:10,
                            height:30,
                            borderRadius:15
                        }
                      } 
                    titleStyle={{color:"#547980", fontSize:16}}/>
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
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: Dimensions.get("window").width,
        backgroundColor: "#DADADA",
      },  
});
