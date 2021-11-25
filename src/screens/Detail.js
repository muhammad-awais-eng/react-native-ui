import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalCard from "./ModalCard";
import ListCard from "./ListCards";
import { ScrollView } from "react-native-gesture-handler";

const Detail = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onchange = (e) => {
    setModalVisible(e);
  };

  return (
    <ImageBackground
      source={require("../images/back2.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          alignItems: "center",
          paddingHorizontal: 40,
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
          color="#a2a2db"
          size={33}
          style={{ marginLeft: "auto", marginRight: 20 }}
        />
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 50,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: "#5facdb",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../images/p.png")}
            style={{
              height: 20,
              width: 26,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "RobotoBold",
            color: "#FFF",
          }}
        >
          NYC
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#a2a2db",
            paddingHorizontal: 15,
          }}
        >
          {" "}
          - - - - - - - - - - - - - -{" "}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "RobotoBold",
            color: "#FFF",
          }}
        >
          IDN
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          New York
        </Text>

        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
            paddingLeft: 162,
          }}
        >
          Pakistan
        </Text>
      </View>
      <Text
        style={{
          color: "#a2a2db",
          fontFamily: "RobotoRegular",
          paddingHorizontal: 42,
          paddingTop: 5,
        }}
      >
        25 June 1997
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 40,
          marginTop: 90,
        }}
      >
        <Image
          source={require("../images/dots.png")}
          style={{ width: 18, height: 18 }}
        />
        <Image
          source={require("../images/filter.png")}
          style={{ width: 18, height: 18, marginLeft: "auto" }}
        />
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: 5,
        }}
      >
        <ListCard onPress={() => setModalVisible(true)} />
        {/* <ListCard onPress={() => setModalVisible(true)} />
        <ListCard onPress={() => setModalVisible(true)} /> */}

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal is closed");
            }}
          >
            <ModalCard
              onPress={() => {
                setModalVisible((pre) => !pre);
              }}
            />
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;

const styles = StyleSheet.create({});
