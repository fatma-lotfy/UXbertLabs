import React, { Component } from 'react';
import { View, Text ,TextInput, StyleSheet , Dimensions , TouchableOpacity,AsyncStorage} from 'react-native';
import { Icon } from "react-native-elements";

export default class Main extends Component {
  state = {
    'name': '',
     isPressed :false,
  }
 
 componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

 setName = (value) => {
  AsyncStorage.setItem('name', value);
  this.setState({ 'name': value });
  this.setState({isPressed :false})
  }

  GoToAPI =()=>{
    this.props.navigation.navigate('APIPage')
  }
  ShowName = ()=>{
    this.setState({isPressed :true})
  }

  render() {
    return (
      <View>
        <View style={styles.Container}>
          <Text style={styles.LabelText}>
            Name : {this.state.isPressed ? this.state.name : null} 
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
          <Icon
            name="person"
            color="#547980"
            type="material"
            size={30}
            iconStyle={{
              position: 'absolute',
              marginRight: 5,
              left :0,
              flex: 1
            }}
          />
          <TextInput
          multiline
          scrollEnabled
          style={styles.textArea}
          placeholder="Enter your name here ..... "
          paddingLeft = {28}
          onChangeText = {this.setName}
          />
          </View>
        </View>
        <TouchableOpacity
         style={styles.SubmitButton}
         onPress = {this.ShowName}
         >
          <Text style={styles.SubmitButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.SubmitButton}
        onPress = {this.GoToAPI}
        >
          <Text style={styles.SubmitButtonText}>API</Text>
        </TouchableOpacity>

     </View>
    );
  }
}
const styles = StyleSheet.create({
 Container: {
    paddingLeft: 15,
    paddingTop: 50,
    paddingBottom: 10,
    paddingRight: 15,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "column",
    shadowColor: "#dfdfdf",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 6
  }},
  LabelText:{
    color:"#000",
    fontSize:20,
    fontWeight:"400",
    marginBottom:5,
  },
  textArea: {
    flex: 6,
    height: 60, 
    borderWidth: 2,
    borderColor: "#547980",
    borderRadius: 10,
},
  SubmitButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#547980",
    marginHorizontal: 20,
},
  SubmitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
},
});


