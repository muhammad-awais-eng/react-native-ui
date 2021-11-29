import React, { useState, useEffect, useMemo, useReducer } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTabScreen from "../screens/MainTabScreen";
import { DrawerContent } from "../screens/DrawerContent";
import Detail from "../screens/Detail";
import SettingScreen from "../screens/SettingScreen";
import SupportScreen from "../screens/SupportScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import RootStackScreen from "../screens/RootStackScreen";
import { ActivityIndicator } from "react-native-paper";

import { AuthContext } from "../components/context/Context";
import { AsyncStorage } from "@react-native-community/async-storage";

const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

function AppNavigator(props) {
  // const [isloaded, setIsloaded] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialState = {
    isloaded: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (preState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...preState,
          userToken: action.token,
          isloaded: false,
        };
      case "LOGIN":
        return {
          ...preState,
          username: action.id,
          userToken: action.token,
          isloaded: false,
        };
      case "LOGOUT":
        return {
          ...preState,
          username: null,
          userToken: null,
          isloaded: false,
        };
      case "REGISTER":
        return {
          ...preState,
          username: action.id,
          userToken: action.token,
          isloaded: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialState);

  const authContext = useMemo(() => ({
    signIn: async (username, password) => {
      let userToken;
      userToken = null;
      console.log(username, password);

      if (username === "admin" && password === "admin") {
        userToken = "validUser";
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (error) {
          console.log(error);
        }
      }
      console.log(userToken);
      dispatch({ type: "LOGIN", id: username, token: userToken });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem("userToken");
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: "LOGOUT" });
    },
    signUp: () => {
      setIsloaded(false);
      setUserToken("random");
    },
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log(error);
      }

      dispatch({ type: "REGISTER", token: userToken });
    }, 3000);
  }, []);

  if (loginState.isloaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen
              name="Home"
              component={MainTabScreen}
              options={{
                headerShown: false,
              }}
            />
            <Drawer.Screen name="Setting" component={SettingScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default AppNavigator;
