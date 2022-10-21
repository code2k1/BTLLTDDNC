import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";

const DangKy = (props) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require(" ../../../assets/logoDangKy.png")}
            style={{ height: 200, width: 260, marginLeft: 0 }}
          />
        </View>
        <View style={{ marginLeft: 40, marginTop: 0 }}>
          <Text style={{ fontSize: 28, fontWeight: "700" }}>Đăng ký</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require(" ../../../assets/phone.png")}
                style={{ height: 25, width: 25, marginTop: 20 }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Số điện thoại"
                  // value={email}
                  //onChangeText={text => setEmail(text)}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image
                source={require(" ../../../assets/user.png")}
                style={{ height: 25, width: 25, marginTop: 20 }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Tên người dùng"
                  // value={email}
                  //onChangeText={text => setEmail(text)}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image
                source={require(" ../../../assets/lock.png")}
                style={{ height: 25, width: 25, marginTop: 20 }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Mật khẩu"
                  // value={passWord}
                  //onChangeText={text => setPassWord(text)}
                  style={styles.input}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image
                source={require(" ../../../assets/lock.png")}
                style={{ height: 25, width: 25, marginTop: 20 }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Nhập lại mật khẩu"
                  // value={passWord}
                  //onChangeText={text => setPassWord(text)}
                  style={styles.input}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                //onPress={moveScreen1}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Đăng Ký</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 25, flexDirection: "row" }}>
              <Text style={{ color: "rgba(136,147,165,255)" }}>
                Đã có tài khoản ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("DangNhap");
                }}
              >
                <Text
                  style={{
                    marginLeft: 5,
                    color: "rgba(28,100,209,255)",
                    fontWeight: "500",
                  }}
                >
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DangKy;

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
    paddingHorizontal: 20,
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
    marginTop: 50,
  },
});
