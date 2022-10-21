import { Pressable, StyleSheet, View } from "react-native";
import React, { Component, useState } from "react";
import {
  Avatar,
  Text,
  Spacer,
  HStack,
  Image,
  VStack,
  theme,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
var PreviewMessage = ({
  typemessage,
  recentmessage,
  timelastmessage,
  statusseen,
}) => (
  <View>
    {typemessage != "Link" &&
    typemessage != "Image" &&
    typemessage != "Sticker" &&
    typemessage != "Text" ? (
      <HStack space={2} alignItems="center">
        <RenderIcon typemessage={typemessage} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: statusseen === true ? "normal" : "600",
            opacity: 0.7,
            color:
              typemessage == "Missed_Incoming_Call" ||
              typemessage == "Missed_Video_Incoming_Call" ||
              typemessage == "Denined_Incoming_Video_Call" ||
              typemessage == "Denined_Incoming_Call"
                ? "red"
                : "#000",
          }}
        >
          {recentmessage}
        </Text>
      </HStack>
    ) : (
      <Text
        numberOfLines={1}
        style={{
          fontSize: 16,
          fontWeight: statusseen === true ? "normal" : "600",
        }}
      >
        {recentmessage}
      </Text>
    )}
  </View>
);
"Video_Outgoing_calls",
  "Outgoing_Calls",
  "Cancelled_Video_Outgoingcalls",
  "Cancelled_Outgoing_Calls",
  "Video_Incoming_Call",
  "Incoming_Call",
  "Missed_Video_Incoming_Call",
  "Missed_Incoming_Call";

var RenderIcon = ({ typemessage }) => (
  <View>
    {typemessage === "Video_Outgoing_calls" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <Feather
          name="arrow-up-right"
          size={9}
          color="green"
          style={{ position: "absolute", marginTop: -1, left: 9 }}
        />
        <Ionicons
          name="ios-videocam"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Outgoing_Calls" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <Feather
          name="arrow-up-right"
          size={9}
          color="green"
          style={{ position: "absolute", marginTop: 2, left: 9 }}
        />
        <Ionicons
          name="ios-call"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Cancelled_Video_Outgoingcalls" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <Feather
          name="arrow-up-right"
          size={9}
          color="red"
          style={{ position: "absolute", marginTop: -1, left: 9 }}
        />
        <Ionicons
          name="ios-videocam"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Cancelled_Outgoing_Calls" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <Feather
          name="arrow-up-right"
          size={9}
          color="red"
          style={{ position: "absolute", marginTop: 2, left: 9 }}
        />
        <Ionicons
          name="ios-call"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Incoming_Call" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <Feather
          name="arrow-down-left"
          size={9}
          color="green"
          style={{ position: "absolute", marginTop: 2, left: 9 }}
        />
        <Ionicons
          name="ios-call"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Missed_Video_Incoming_Call" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <MaterialIcons
          name="call-missed"
          size={9}
          color="red"
          style={{ position: "absolute", marginTop: -1, left: 9 }}
        />
        <Ionicons
          name="ios-videocam"
          size={18}
          color="red"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Missed_Incoming_Call" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <MaterialIcons
          name="call-missed"
          size={15}
          color="red"
          style={{ position: "absolute" }}
        />
        <MaterialIcons
          name="call-end"
          size={20}
          color="red"
          style={{ marginTop: 6 }}
        />
      </View>
    ) : typemessage === "Denined_Outgoing_Video_Call" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <MaterialIcons
          name="dnd-forwardslash"
          size={9}
          color="red"
          style={{ position: "absolute", left: 9, marginTop: -2 }}
        />
        <Ionicons
          name="ios-videocam"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Denined_Outgoing_Call" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <MaterialIcons
          name="dnd-forwardslash"
          size={9}
          color="red"
          style={{ position: "absolute", marginTop: 2, left: 9 }}
        />
        <Ionicons
          name="ios-call"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Denined_Incoming_Video_Call" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <MaterialIcons
          name="dnd-forwardslash"
          size={9}
          color="red"
          style={{ position: "absolute", left: 9, marginTop: -2 }}
        />
        <Ionicons
          name="ios-videocam"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : typemessage === "Denined_Incoming_Call" ? (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <MaterialIcons
          name="dnd-forwardslash"
          size={9}
          color="red"
          style={{ position: "absolute", marginTop: 2, left: 9 }}
        />
        <Ionicons
          name="ios-call"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    ) : (
      <View style={{ alignItems: "center", opacity: 0.7 }}>
        <Feather
          name="arrow-down-left"
          size={9}
          color="green"
          style={{ position: "absolute", marginTop: -1, left: 9 }}
        />
        <Ionicons
          name="ios-videocam"
          size={18}
          color="#52525b"
          style={{ marginTop: 2 }}
        />
      </View>
    )}
  </View>
);

export default function Item(props) {
  const [colorItem, setColorItem] = useState("white");
  const navigation = props.navigation;
  return (
    <View style={{ width: "100%", flexDirection: "row" }}>
      {/* {props.children} */}

      <Pressable
        style={{ width: "100%", height: 80, backgroundColor: `${colorItem}` }}
        onPressOut={() => setColorItem("white")}
        onPressIn={() => setColorItem("#f4f4f5")}
        onPress={() => {
          navigation.navigate(props.page, { name: props.page });
        }}
      >
        <HStack
          space={4}
          pl={1}
          style={{ alignItems: "center", width: "100%", height: "100%" }}
        >
          {/* <Avatar size="lg" source={{ uri: 'props.image' }} /> */}
          <Avatar size="lg" source={require("../../image/avatar.png")} />
          <HStack
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderColor: "rgba(158, 150, 150, .5)",
              height: "100%",
            }}
          >
            <View
              style={{ justifyContent: "center", flex: 1, paddingRight: 10 }}
            >
              <HStack>
                <Text
                  alignSelf="flex-start"
                  pt={3}
                  style={{ fontSize: 17, fontWeight: "500" }}
                >
                  {props.userName}
                </Text>
                <Spacer />
                <Text
                  fontSize={14}
                  color="coolGray.800"
                  alignSelf="flex-start"
                  p={0}
                >
                  {props.timelastmessage}
                </Text>
              </HStack>
              <PreviewMessage
                typemessage={props.typemessage}
                recentmessage={props.recentmessage}
                statusseen={props.statusseen}
              />
            </View>
          </HStack>
        </HStack>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
