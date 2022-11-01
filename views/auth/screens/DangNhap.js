import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState,useEffect } from "react";
import{initializeAuth,signInWithEmailAndPassword,} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import userAPI from "../../../redux/reducers/user/userAPI";
import { useDispatch, useSelector } from "react-redux";

const DangNhap = (props) => {
  const navigation = useNavigation();
  const [email,setEmail] = useState("");
  const [passWord,setPassWord] = useState("");
  //Firebase 
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app,{});
  // redux
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  useEffect(() => {
    if (userState.is_login) {
        navigation.navigate("HomeListFriend")
    } else {
        if (userState.error) {
            (
                Alert.alert("Thông báo", "Tài khoản, mật khẩu sai")
            )
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [userState]);

   const hanldPressLogin = ()=>{
      signInWithEmailAndPassword(auth,email,passWord)
      .then(async ()=>{
          const accessToken =`Bearer ${auth.currentUser.stsTokenManager.accessToken}`;
          console.log(accessToken);
          // var user =await userAPI.getUserInfo()(accessToken )
          // dispatch(userAPI.getUserInfo()(accessToken));
          dispatch(userAPI.getUserInfo()(accessToken))
      })
      .catch(error =>{
        console.log(error);
          Alert.alert("Thông báo","Xảy ra lỗi! \n Mời bạn nhập lại tài khoản và mật khẩu")
      })
}
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require(" ../../../assets/logoDangNhap.png")}
            style={{ height: 200, width: 260, marginLeft: 0 }}
          />
        </View>
        <View style={{ marginLeft: 40, marginTop: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: "700" }}>Đăng nhập</Text>
        </View>
        <View>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require(" ../../../assets/phone.png")}
                style={{ height: 25, width: 25, marginTop: 20 }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Số điện thoại"
                  onChangeText={x=>setEmail(x)} value={email}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require(" ../../../assets/lock.png")}
                style={{ height: 25, width: 25, marginTop: 20 }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Mật khẩu"
                  onChangeText={x=>setPassWord(x)} value={passWord}
                  style={styles.input}
                  secureTextEntry
                />
              </View>
            </View>

            <View style={{ top: 20, marginLeft: 200 }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("QuenMatKhau");
                }}
              >
                <Text
                  style={{ color: "rgba(28,100,209,255)", fontWeight: "500" }}
                >
                  Quên mật khẩu ?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate("HomeListFriend", {
                //     name: "HomeListFriend",
                //   })
                // }
                onPress={hanldPressLogin}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 35, flexDirection: "row" }}>
              <Text style={{ color: "rgba(136,147,165,255)" }}>
                Chưa có tài khoản ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("DangKy");
                }}
              >
                <Text
                  style={{
                    marginLeft: 5,
                    color: "rgba(28,100,209,255)",
                    fontWeight: "500",
                  }}
                >
                  Đăng ký
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

export default DangNhap;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginLeft: 10,
    width: "70%",
    borderBottomWidth: 1,
    borderColor: "rgba(232,233,236,255)",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "rgba(0,101,255,255)",
    width: "100%",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
