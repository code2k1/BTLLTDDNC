import { Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './Footter_Chat_Style'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
// import EmojiSelector, { Categories } from "react-native-emoji-selector";
export class Footter_Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.foorter_left}>
          <MaterialIcons name="insert-emoticon" size={24} color="#0091ff" />
          <TextInput style={styles.input_Message} placeholder='Nhập tin nhắn...'></TextInput>
        </TouchableOpacity>
        <View style={styles.footer_Right}>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-voice" size={24} color="#0091ff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="picture" size={24} color="#0091ff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="send" size={24} color="#0091ff" />
          </TouchableOpacity>
          {/* <EmojiSelector category={Categories.symbols} onEmojiSelected={emoji => console.log(emoji)}/> */}
        </View>
      </View>
    )
  }
}
export default Footter_Chat