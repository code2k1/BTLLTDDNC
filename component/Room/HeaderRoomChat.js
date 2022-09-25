import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default class HeaderRoomChat extends Component {
    render() {
        const navigation=this.props.navigation ;
        return (
            <LinearGradient
                colors={['#4087f3', '#01bafa']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <View style={{display:"flex",justifyContent:"space-between", flexDirection:"row", width:"100%"}}>
                    <View style={{display:"flex",justifyContent:"space-between", flexDirection:"row"}}>
                        <TouchableOpacity style={{  paddingLeft:10,paddingRight:10, top: 1 }} onPress={() =>
                            navigation.navigate('Home', { name: 'Home' })}>
                            <Ionicons name="arrow-back" size={25} color="#fff" />
                        </TouchableOpacity>
                        <Text style={{color:"white", fontSize:18}}>Nhật Khương</Text>
                    </View>
                    <View style={{display:"flex",justifyContent:"space-around", flexDirection:"row", flex:0.5}}>
                        <TouchableOpacity style={styles.container_right_icon}>
                            <Feather name="phone" size={22} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container_right_icon}>
                            <Feather name="video" size={22} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container_right_icon}>
                            <Feather name="menu" size={22} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <TextInput placeholderTextColor='#fff' placeholder='Tìm kiếm' style={{ opacity: 0.5, color: '#fff', fontSize: 20, width: '60%' }}></TextInput>
                <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <MaterialIcons name="qr-code-scanner" size={32} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Feather name="plus" size={38} color="#fff" />
                </TouchableOpacity> */}
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    gradient: {
        height: 60, width: '100%', flexDirection: 'row', alignItems: 'center'
    }
})