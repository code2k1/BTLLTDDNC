import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

const ResetMatKhau = (props) => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require(" ../../../assets/DoiLaiMatKhau.png")}
            style={{ height: 260, width: 300 }}
          />
        </View>
        <View style={{ marginLeft: 40 }}>
          <Text style={{ fontSize: 28, fontWeight: "700" }}>
            Đặt lại {"\n"}Mật khẩu
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require(" ../../../assets/lock.png")}
                style={{ height: 25, width: 25, marginTop: 20 }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Mật khẩu mới"
                  // value={email}
                  //onChangeText={text => setEmail(text)}
                  secureTextEntry
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
                  placeholder="Nhập lại mật khẩu"
                  // value={email}
                  //onChangeText={text => setEmail(text)}
                  secureTextEntry
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                //onPress={moveScreen1}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

export default ResetMatKhau;

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
    marginTop: 60,
  },
});
