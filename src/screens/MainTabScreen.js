import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "./Home";
import Detail from "./Detail";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

const HomeStack = createNativeStackNavigator();
const DetailStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: "#a2a2db" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />,
      }}
    />
    <Tab.Screen
      name="Detail"
      component={DetailStackScreen}
      options={{
        tabBarLabel: "Details",
        tabBarIcon: ({ color }) => (
          <Icon name="expand-all" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <Icon name="account-circle" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarIcon: ({ color }) => <Icon name="more" size={25} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

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
const ExploreStackScreen = ({}) => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        headerShown: false,
      }}
    />
  </ExploreStack.Navigator>
);
const ProfileStackScreen = ({}) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
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
