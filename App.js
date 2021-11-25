import React from "react";
import AppNavigator from "./src/navigations/Navigator";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = React.useState(false);

  return <AppNavigator />;
};
export default App;
