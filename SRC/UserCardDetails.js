import React, { Component } from "react";
import { Text, View, Dimensions} from "react-native";
import {Icon} from 'react-native-elements'

export default class UserCardDetails extends Component {
  render() {
      const{id ,name,username,email} = this.props.user ;
    return (
        <View style={styles.ContainerViewStyle}>
                <Icon name="business" color="#547980" size={36} iconStyle={styles.iconStyle}></Icon>
                <View style={styles.textContainerStyle}>
                    <Text>Id: {id}</Text>
                    <Text>Name: {name}</Text>
                    <Text>User name: {username}</Text>
                    <Text>Email: {email}</Text>
                </View>
            </View>
    );
  }
}

const styles = {
    ContainerViewStyle:{
          marginBottom:10,
          flexDirection: 'row',
          alignItems: 'center',
          padding:10,
          backgroundColor:"#fff",
          borderWidth:0,
          borderRadius:5,
          shadowColor: "#808080",
          shadowOffset: {
          borderWidth: 0,
          height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          minHeight:100,
          minWidth:Dimensions.get('window').width-30,
          },
    iconStyle:{
          marginRight:10,
      },

    TextStyle: {
            fontSize: 12,
            color: "#000"
            },
    textContainerStyle:{
            flexDirection: 'column',
            justifyContent:'space-between'
            },
  };