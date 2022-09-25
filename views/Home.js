import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../component/Item";
import Search from "../component/Search";
import React, { Component } from 'react'
import { NativeBaseProvider, ScrollView } from "native-base";


export default function Home({ navigation }) {

  var typemessages = [
    "Link","Image", "Text", "Sticker", "Video_Outgoing_calls", "Outgoing_Calls", 
    "Cancelled_Video_Outgoingcalls", "Cancelled_Outgoing_Calls", "Video_Incoming_Call", 
    "Incoming_Call", "Missed_Video_Incoming_Call", "Missed_Incoming_Call"];
  const [items,setItem] = useState([
    // {
    //   id: '1',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 1',
    //   page: 'ChatRoom',
    //   timelastmessage: "14 phút",
    //   typemessage: typemessages[0],
    //   recentmessage:"https://www.youtube.com/",
    //   statusseen: true,
    //   navigation: navigation,
    // },
    // {
    //   id: '2',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 2',
    //   page: 'ChatRoom',
    //   typemessage: typemessages[1],
    //   timelastmessage: "2 giờ",
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '3',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 3',
    //   page: 'ChatRoom',
    //   timelastmessage: "T4",
    //   typemessage: typemessages[2],
    //   recentmessage:"Một con vịt xòe ra 2 cái cánh nó kêu rằng cáp cáp cáp cạp cạp cạp, gặp hồ nước nó bì bà bì bỏm, lúc lên bờ vẫy cái cánh cho khô",
    //   statusseen: true,
    //   navigation: navigation,
    // },
    // {
    //   id: '4',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[3],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '5',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[4],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '6',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[5],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '7',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[6],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '8',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[7],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '9',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[8],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '10',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[9],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    // {
    //   id: '11',
    //   image: 'https://reactnative.dev/img/tiny_logo.png',
    //   userName: 'Võ Minh Hiếu 4',
    //   page: 'ChatRoom',
    //   timelastmessage: "20/04",
    //   typemessage: typemessages[10],
    //   statusseen: false,
    //   navigation: navigation,
    // },
    {
      id: '12',
      image: '',
      userName: 'Võ Minh Hiếu 4',
      page: 'ChatRoom',
      timelastmessage: "20/04",
      typemessage: typemessages[11],
      icon:'',
      statusseen: false,
      navigation: navigation,
    },
  ]);
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Search />
        <FlatList
          style={{ height: '92%' }}
          data={items}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
