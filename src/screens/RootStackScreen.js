import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import splashScreen from "./SplashScreen";

const RootStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SignupStack = createNativeStackNavigator();

const LoginStackScreen = ({}) => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
  </LoginStack.Navigator>
);

const SignupStackScreen = ({}) => (
  <SignupStack.Navigator>
    <SignupStack.Screen
      name="Signup"
      component={SignupScreen}
      options={{
        headerShown: false,
      }}
    />
  </SignupStack.Navigator>
);

const RootStackScreen = ({ navigation }) => {
  const [isloaded, setIsloaded] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setIsloaded(false);
    }, 2200);
  }, []);

  return (
    <>
      {isloaded ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen
            name="splash"
            component={splashScreen}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen
            name="LoginScreen"
            component={LoginStackScreen}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="SignupScreen"
            component={SignupStackScreen}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      )}
    </>
  );
};

export default RootStackScreen;

const styles = StyleSheet.create({});
