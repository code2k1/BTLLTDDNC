import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import MessageItem from './MessageItem'
import MyMessagaItem from'./MyMessagaItem'

const BodyRoomChat = () => {
  return (
    <ScrollView style={{backgroundColor:"#f5f5f5", maxHeight:"83%",height:"83%"}}>
      <MessageItem  />
      <MyMessagaItem />
      <MessageItem  />
      <MyMessagaItem />
      <MessageItem  />
      <MyMessagaItem />
      <MessageItem  />
      <MyMessagaItem />
      <MessageItem  />
      <MyMessagaItem />
    </ScrollView>
  )
}

export default BodyRoomChat

const styles = StyleSheet.create({})