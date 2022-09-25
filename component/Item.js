import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { NativeBaseProvider, Avatar, Text, Spacer, HStack, Image } from "native-base";
import { Feather } from '@expo/vector-icons';
export default class Item extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{ width: '100%', flexDirection: 'row' }}>
        {/* {this.props.children} */}
        
        <Avatar size="lg" source={{uri:this.props.image}} style={{ position: 'absolute', left: 10, top: 5 }} />
        <TouchableOpacity style={{ width: '100%', height: 80 }} onPress={() =>
          navigation.navigate(this.props.page, { name: this.props.page })}>
          <HStack style={{ marginLeft: '22%', width: '78%', borderBottomWidth: 1, borderColor: 'rgba(158, 150, 150, .5)', height: '100%', }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>{this.props.userName}</Text>
              <PreviewMessage typemessage={this.props.typemessage} recentmessage={this.props.recentmessage} statusseen={this.props.statusseen} icon={this.props.icon}/>
            </View>
            <Spacer />
            <Text fontSize={14} color="coolGray.800" alignSelf="flex-start" p={3}>{this.props.timelastmessage}</Text>
          </HStack>
        </TouchableOpacity>


      </View>
    )
  }
}
const statusCall = new Map([
  ["Video_Outgoing_calls", "Cuộc gọi video đi"],
  ["Cancelled_Video_Outgoingcalls", "Cuộc gọi video đi"],
  ["Outgoing_Calls", "Cuộc gọi đi"],
  ["Cancelled_Outgoing_Calls", "Cuộc gọi đi"],
  ["Video_Incoming_Call", "Cuộc gọi video đến"],
  ["Missed_Video_Incoming_Call", "Cuộc gọi video bị nhỡ"],
  ["Incoming_Call", "Cuộc gọi thoại đến"],
  ["Missed_Incoming_Call", "Cuộc gọi thoại bị nhỡ"],
]);

var PreviewMessage = ({ typemessage, recentmessage, statusseen, timelastmessage,icon }) => (
  <View>
    {typemessage != "Link" && typemessage != "Text" && typemessage != "Image" && typemessage != "Sticker" ?
      <HStack space={2}><Image source={{uri:icon}} alt="aaa" size={5} />
        <Text style={{ fontSize: 18, fontWeight: 'normal', opacity: .6 }}>{statusCall.get(`${typemessage}`)}</Text></HStack> : null
    }
  </View>
);

const styles = StyleSheet.create({})