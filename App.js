import React from "react";
import AppNavigator from "./src/navigations/Navigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = React.useState(false);

  // React.useEffect(async () => {
  //   await Font.loadAsync({
  //     RobotBold: require("./src/fonts/Roboto-Bold.ttf"),
  //     Robot0Regular: require("./src/fonts/Roboto-Regular.ttf"),
  //   });
  //   setIsFontLoaded(true);
  // }, []);

  return <AppNavigator />;
};
export default App;
