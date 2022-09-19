import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class Search extends Component {
  render() {
    return (
        <LinearGradient
        colors={['#4087f3', '#01bafa']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradient}
      >

        <TouchableOpacity style={{paddingLeft:10, paddingRight:10, borderRadius:50}}><Ionicons name="search-outline" size={32} color="#fff" />
        </TouchableOpacity>
        <TextInput placeholderTextColor='#fff' placeholder='Tìm kiếm' style={{opacity:0.5, color:'#fff', fontSize:20,width:'60%'}}></TextInput>
        <TouchableOpacity style={{paddingLeft:10, paddingRight:10}}>
        <MaterialIcons name="qr-code-scanner" size={32} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={{paddingLeft:10, paddingRight:10}}>
        <Feather name="plus" size={38} color="#fff" />
        </TouchableOpacity>
        </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
    gradient:{
        height:60,width:'100%', flexDirection:'row', alignItems:'center'
    }
})