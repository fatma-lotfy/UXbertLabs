import React, { Component } from 'react';
import { View, Text, StyleSheet ,ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
import UserCardDetails from './UserCardDetails';

export default class APIPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
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
  }
  
  render() {
    let NewArray = this.state.users.filter((user)=>{
      return (user.id % 2 !==0)
    })
    return (
      <ScrollView contentContainerStyle={{ minHeight: Dimensions.get("window").height - 210, flexDirection:"column", justifyContent:"space-between" }}>
        <View style ={styles.Container}>
          <View style={{paddingHorizontal:5}}>
              {NewArray.map(user =>(
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
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height-100,
        backgroundColor: "#DADADA",
      },
});
