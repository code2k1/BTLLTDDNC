import { Pressable, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'
import { Avatar, Text, Spacer, HStack, Image } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

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