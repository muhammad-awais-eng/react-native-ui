import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          paddingHorizontal: 20,
        }}
      >
        <Icon
          name="menu"
          size={30}
          color="#a2a2db"
          style={{ width: 20 }}
          onPress={() => navigation.openDrawer()}
        />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={{ marginLeft: "auto", marginRight: 15 }}
        />
      </View>
      <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
        <Text
          style={{ fontSize: 40, color: "#522289", fontFamily: "RobotBold" }}
        >
          HEllO
        </Text>
        <Text
          style={{
            fontSize: 15,
            paddingVertical: 10,
            paddingRight: 80,
            lineHeight: 22,
            fontFamily: "RobotoRegular",
            color: "#a2a2db",
          }}
        >
          Dummy data is add to check the progress of App,Hope every thing is
          fine.
        </Text>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#Ffff",
            borderRadius: 40,
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderColor: "#D3D3D3",
            borderWidth: 1,
            marginTop: 30,
          }}
        >
          <Image
            source={require("../images/search.png")}
            style={{ height: 14, width: 14 }}
          />
          <TextInput
            placeholder="Enter here"
            style={{
              paddingHorizontal: 20,
              fontSize: 15,
              color: "#ccccef",
              outline: "none",
            }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: -40, marginTop: 30 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#5facdb",
              height: 55,
              width: 55,
              borderRadius: 50,
              marginLeft: 22,
            }}
          >
            <Image
              source={require("../images/p.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ff5c83",
              height: 55,
              width: 55,
              borderRadius: 50,
              marginLeft: 22,
            }}
          >
            <Icon name="office-building" color="white" size={30} />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffa06c",
              height: 55,
              width: 55,
              borderRadius: 50,
              marginLeft: 22,
            }}
          >
            <Icon name="bus" color="white" size={32} />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#bb32fe",
              height: 55,
              width: 55,
              borderRadius: 50,
              marginLeft: 22,
            }}
          >
            <Icon name="dots-horizontal" color="white" size={32} />
          </View>
        </ScrollView>

        <Text
          style={{
            color: "#fff",
            marginTop: 50,
            fontSize: 18,
            fontFamily: "RobotoRegular",
          }}
        >
          Recomended
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: -30, marginTop: 30 }}
        >
          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              // marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../images/1.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  width: 150,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Swat District is a district in the Malakand Division of Khyber
                  Pakhtunkhwa, Pakista
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../images/2.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  width: 150,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Swat District is a district in the Malakand Division of Khyber
                  Pakhtunkhwa, Pakista
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#5facdb" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../images/3.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  width: 150,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Swat District is a district in the Malakand Division of Khyber
                  Pakhtunkhwa, Pakista
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
