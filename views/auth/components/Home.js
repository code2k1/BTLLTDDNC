import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";

import OnboardingItem from "./OnboardingItem";
import slides from ".././data/slides";
import Paginator from "./Paginator";

import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

export default Home = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const ViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  

  return (
    <View>
      <View style={[styles.container]}>
        <ImageBackground
          source={require(" ../../../assets/backgound.png")}
          style={{ top: 20, width: "100%", height: 230 }}
        />
        <View style={{ flex: 3 }}>
          <FlatList
            style={{ marginTop: -150 }}
            data={slides}
            renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={ViewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <Paginator data={slides} scrollX={scrollX} />
        <View style={{ top: -50 }}>
          <View
            style={[
              {
                width: 250,
                height: 35,
                backgroundColor: "rgba(0,101,255,255)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("DangNhap");
              }}
            >
              <Text style={{ color: "#fff" }}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              {
                width: 250,
                height: 35,
                backgroundColor: "rgba(241,243,247,255)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                top: 10,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("DangKy");
              }}
            >
              <Text>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
