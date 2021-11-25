import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Detail from "../screens/Detail";

const HomeStack = createNativeStackNavigator();
const DetailStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = () => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#522289",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailStack.Screen
      name="Detail"
      component={Detail}
      options={{
        headerShown: false,
      }}
    />
  </DetailStack.Navigator>
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Detail"
          component={DetailStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
