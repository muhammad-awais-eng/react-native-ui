import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ListCard = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        paddingHorizontal: 36,
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "#fff",
        height: 182,
        elevation: 1,
        width: 270,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingTop: 20,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "RobotoBold",
            color: "#4b3ca7",
            fontSize: 20,
          }}
        >
          NYC
        </Text>
        <Text
          style={{
            fontFamily: "RobotoBold",
            color: "#4b3ca7",
            fontSize: 20,
            paddingLeft: 20,
          }}
        >
          - - - - - - -
        </Text>
        <Text
          style={{
            fontFamily: "RobotoBold",
            color: "#4b3ca7",
            fontSize: 20,
            paddingLeft: 20,
          }}
        >
          IDN
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
            fontSize: 11,
          }}
        >
          New York
        </Text>

        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Pakistan
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "#4b3ca7",
            fontFamily: "RobotoRegular",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          09:00 AM
        </Text>

        <Text
          style={{
            color: "#4b3ca7",
            fontFamily: "RobotoRegular",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          21:00 PM
        </Text>
      </View>
      <Text
        style={{
          color: "#a2a2db",
          fontFamily: "RobotoRegular",
          paddingHorizontal: 5,
          paddingTop: 5,
        }}
      >
        25 June 1997
      </Text>

      <Text
        style={{
          color: "#a2a2db",
          marginVertical: 8,
          marginRight: -5,
          fontSize: 17,
        }}
      >
        - - - - - - - - - - - - - - - - - -
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: -8,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "RobotoRegular",
            color: "#522289",
            fontSize: 16,
          }}
        >
          Lorem ipsum
        </Text>
        <Text
          style={{
            fontFamily: "RobotoBold",
            color: "#4b3ca7",
            paddingLeft: 75,
            fontSize: 16,
          }}
        >
          $400
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListCard;
