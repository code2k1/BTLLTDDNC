import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { NativeBaseProvider, Avatar } from "native-base";
export default class Item extends Component {
  render() {
    const navigation=this.props.navigation ;
    return (
      <View  style={{width:'100%', flexDirection:'row'}}>
        <NativeBaseProvider>
              <Avatar bg="amber.500" size="lg" source={this.props.image}  style={{position:'absolute', left:10, top:5}}></Avatar>
          <TouchableOpacity style={{width:'100%', height:80}} onPress={() =>
            navigation.navigate(this.props.page, { name: this.props.page })}>

              <View  style={{marginLeft:'22%',width:'78%', borderBottomWidth:1,borderColor:'rgba(158, 150, 150, .5)',height:'100%', justifyContent:'center'}}>
                <Text style={{fontSize:20, fontWeight:'600'}}>{this.props.userName}</Text>
                <Text style={{fontSize:18, fontWeight:'normal', opacity:.6}}>{this.props.description}</Text>
            </View>
          </TouchableOpacity>
        </NativeBaseProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({})