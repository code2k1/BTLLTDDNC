import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../component/ListFriend/Item";
import Search from "../component/ListFriend/Search";
import React, { Component } from "react";
import { NativeBaseProvider, ScrollView } from "native-base";
import { useSelector } from "react-redux";
import  io  from "socket.io-client";
import tokenService from "../services/token.service";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import userAPI from "../redux/reducers/user/userAPI";
export let newSocket = io("https://frozen-caverns-53350.herokuapp.com");


export default function HomeListFriend({ navigation }) {
  var typemessages = [
    "Link",
    "Image",
    "Text",
    "Sticker",
    "Video_Outgoing_calls",
    "Outgoing_Calls",
    "Cancelled_Video_Outgoingcalls",
    "Cancelled_Outgoing_Calls",
    "Video_Incoming_Call",
    "Incoming_Call",
    "Missed_Video_Incoming_Call",
    "Missed_Incoming_Call",
    "Denined_Outgoing_Video_Call",
    "Denined_Outgoing_Call",
    "Denined_Incoming_Video_Call",
    "Denined_Incoming_Call",
  ];

  const statusCall = new Map([
    ["Image", "[Hình ảnh]"],
    ["Sticker", "[Sticker]"],
    ["Video_Outgoing_calls", "Cuộc gọi video đi"],
    ["Cancelled_Video_Outgoingcalls", "Cuộc gọi video đi"],
    ["Outgoing_Calls", "Cuộc gọi đi"],
    ["Cancelled_Outgoing_Calls", "Cuộc gọi đi"],
    ["Video_Incoming_Call", "Cuộc gọi video đến"],
    ["Missed_Video_Incoming_Call", "Cuộc gọi video bị nhỡ"],
    ["Incoming_Call", "Cuộc gọi thoại đến"],
    ["Missed_Incoming_Call", "Cuộc gọi thoại bị nhỡ"],
    ["Denined_Outgoing_Video_Call", "Cuộc gọi video đến"],
    ["Denined_Outgoing_Call", "Cuộc gọi thoại đến"],
    ["Denined_Incoming_Video_Call", "Cuộc gọi video đi"],
    ["Denined_Incoming_Call", "Cuộc gọi thoại đi"],
  ]);

  const [items, setItem] = useState([
    {
      id: "1",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 1",
      page: "ChatRoom",
      timelastmessage: "14 phút",
      typemessage: typemessages[0],
      recentmessage: "[Link] " + "https://www.youtube.com/",
      statusseen: true,
      navigation: navigation,
    },
    {
      id: "2",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 2",
      page: "ChatRoom",
      typemessage: typemessages[1],
      recentmessage: statusCall.get(typemessages[1]),
      timelastmessage: "2 giờ",
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "3",
      image:
        "https://th.bing.com/th/id/OIP.I8iUX3y5aqNvDV3uRNJfCAHaD5?pid=ImgDet&rs=1",
      userName: "Võ Minh Hiếu 3",
      page: "ChatRoom",
      timelastmessage: "T4",
      typemessage: typemessages[2],
      recentmessage:
        "aaa alkfadm ammm lkma lkl kk l lklk alknal knalk lk nlk nlakn lknlka nlka nlka nlk nalkn alkn alkn lk",
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "4",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[3],
      recentmessage: statusCall.get(typemessages[3]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "5",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[4],
      recentmessage: statusCall.get(typemessages[4]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "6",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[5],
      recentmessage: statusCall.get(typemessages[5]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "7",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[6],
      recentmessage: statusCall.get(typemessages[6]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "8",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[7],
      recentmessage: statusCall.get(typemessages[7]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "9",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[8],
      recentmessage: statusCall.get(typemessages[8]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "10",
      image: "https://reactnative.dev/img/tiny_logo.png",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[9],
      recentmessage: statusCall.get(typemessages[9]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "11",
      image:
        "https://th.bing.com/th/id/OIP.I8iUX3y5aqNvDV3uRNJfCAHaD5?pid=ImgDet&rs=1",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[10],
      recentmessage: statusCall.get(typemessages[10]),
      statusseen: true,
      navigation: navigation,
    },
    {
      id: "12",
      image:
        "https://th.bing.com/th/id/OIP.I8iUX3y5aqNvDV3uRNJfCAHaD5?pid=ImgDet&rs=1",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[11],
      recentmessage: statusCall.get(typemessages[11]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "13",
      image:
        "https://th.bing.com/th/id/OIP.I8iUX3y5aqNvDV3uRNJfCAHaD5?pid=ImgDet&rs=1",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[12],
      recentmessage: statusCall.get(typemessages[12]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "14",
      image:
        "https://th.bing.com/th/id/OIP.I8iUX3y5aqNvDV3uRNJfCAHaD5?pid=ImgDet&rs=1",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[13],
      recentmessage: statusCall.get(typemessages[13]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "15",
      image:
        "https://th.bing.com/th/id/OIP.I8iUX3y5aqNvDV3uRNJfCAHaD5?pid=ImgDet&rs=1",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[14],
      recentmessage: statusCall.get(typemessages[14]),
      statusseen: false,
      navigation: navigation,
    },
    {
      id: "16",
      image:
        "https://th.bing.com/th/id/OIP.I8iUX3y5aqNvDV3uRNJfCAHaD5?pid=ImgDet&rs=1",
      userName: "Võ Minh Hiếu 4",
      page: "ChatRoom",
      timelastmessage: "20/04",
      typemessage: typemessages[15],
      recentmessage: statusCall.get(typemessages[15]),
      statusseen: false,
      navigation: navigation,
    },
  ]);
  const userState = useSelector(state => state.user)
  const listRoom = userState.rooms;
  const Data = listRoom.map((e)=>{
        return ({id:e._id,name:e.name,image:e.avatar,lastMessage:e.messages[0]?.content,time:(e.createdAt)});
    });
    var count = 0;

    const roomState = useSelector(state => state.room);
    const [socket, setSocket] = useState(null);

    const rooms = userState.rooms;
    
    const dispatch = useDispatch();
    const token = tokenService.getAccessToken();
    const roomId = useRef(roomState._id);
    useEffect(() => {
        roomId.current = roomState._id;
    });
    const message = useRef(roomState.messageSent);
    useEffect(() => {
        message.current = roomState.messageSent;
    });
    useEffect(() => {
        if (userState.is_login) {
            dispatch(userAPI.getUserInfo()(tokenService.getAccessToken()));
        }
    }, []);
    useEffect(() => {
        newSocket.disconnect();
        newSocket = io("https://frozen-caverns-53350.herokuapp.com");
        newSocket?.on("server-send-message", function (data) {
            if (roomId.current === data.roomId) {
                dispatch(roomAPI.updateListChat()(data));
            }
            dispatch(
                userAPI.updateListChatForUserNoOnScreen()({
                    data,
                    roomId: data.roomId,
                    rooms,
                })
            );
        });
        newSocket?.on("connect", () => {
            console.log("connecting");
            newSocket.emit("start", { token: token });
        });
        newSocket?.on("disconnect", () => {
            console.log("disconnect");
        });

        // socket request add friend

        newSocket.on("send-friend-invite", function (data) {
            console.log(data);
            dispatch(
                userAPI.updateListRequestAddFriend()(data.friendInvite.user)
            );
        });

        // call video

        // navigator.mediaDevices
        //     .getUserMedia({ video: true, audio: true })
        //     .then((stream) => {
        //         setStream(stream);
        //         myVideo.current.srcObject = stream;
        //     });

        // newSocket.on("me", (id) => {
        //     setMe(id);
        // });

        // newSocket.on("callUser", (data) => {
        //     setReceivingCall(true);
        //     setCaller(data.from);
        //     setName(data.name);
        //     setCallerSignal(data.signal);
        // });

        // call video

        return () => {
            newSocket?.off("connect");
            newSocket?.off("disconnect");
            newSocket?.off("server-send-message");
        };
        // }
    }, [token]);
    
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Search />
        <FlatList
          style={{ height: "92%" }}
          data={listRoom}
          renderItem={({ item }) => {
            count++;
            return <Item {...item} navigation={navigation}/>
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
