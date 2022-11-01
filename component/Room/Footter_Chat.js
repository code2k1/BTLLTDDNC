import { Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './Footter_Chat_Style'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import roomAPI from '../../redux/reducers/Room/roomAPI';
// import EmojiSelector, { Categories } from "react-native-emoji-selector";
function Footter_Chat(){
  const dispatch = useDispatch();
  const roomState = useSelector(state => state.room);
  const userState = useSelector(state => state.user)
  const [text,setText] = useState("");
  const newSocket = io("https://frozen-caverns-53350.herokuapp.com", {
        query: {
            // token: useState.accessToken,
        },
    });
  const sendMessageSocket = () => {
      console.log("sendMessage");

      newSocket.emit("client-send-message", {
          token: userState.accessToken,
          roomId: roomState._id,
          content: text,
          type: "text",
      });
  };
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.foorter_left}>
          <MaterialIcons name="insert-emoticon" size={24} color="#0091ff" />
          <TextInput value={text} onChangeText={x=>setText(x)} style={styles.input_Message} placeholder='Nhập tin nhắn...'></TextInput>
        </TouchableOpacity>
        <View style={styles.footer_Right}>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-voice" size={24} color="#0091ff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="picture" size={24} color="#0091ff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{

            dispatch(roomAPI.updateSentMessage()(text));
            setText("");
            sendMessageSocket
          }
            } >
            <FontAwesome name="send" size={24} color="#0091ff"/>
          </TouchableOpacity>
          {/* <EmojiSelector category={Categories.symbols} onEmojiSelected={emoji => console.log(emoji)}/> */}
        </View>
      </View>
    )
}
export default Footter_Chat