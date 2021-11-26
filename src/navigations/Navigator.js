import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "../screens/MainTabScreen";
import { DrawerContent } from "../screens/DrawerContent";
import Detail from "../screens/Detail";
import SettingScreen from "../screens/SettingScreen";
import SupportScreen from "../screens/SupportScreen";
import BookmarkScreen from "../screens/BookmarkScreen";

const Drawer = createDrawerNavigator();

function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
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
    </NavigationContainer>
  );
}

export default AppNavigator;
