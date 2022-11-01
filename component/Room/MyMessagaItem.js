import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './MyMessageItem_Style'
function  MyMessagaItem ({avatar,name,time,message,type,check}) {
    return (
        <View style={styles.container}>
            <View style={styles.container_Right}>
                <Text style={styles.container_Right_Message}>{message}</Text>
                <Text style={styles.container_Right_Time}>10:10</Text>
            </View>
      </View>
    )
}

export default MyMessagaItem