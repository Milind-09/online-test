import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppState from "./context/AppState";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Que1 from "./screens/Que1";
import Que2 from "./screens/Que2";
import Que3 from "./screens/Que3";
import Que4 from "./screens/Que4";
import Que5 from "./screens/Que5";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppState>
      <Text>hello</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Que1"
            component={Que1}
            options={{ title: "Questions" }}
            />
          <Stack.Screen
            name="Que2"
            component={Que2}
            options={{ title: "Questions" }}
            />
          <Stack.Screen
            name="Que3"
            component={Que3}
            options={{ title: "Questions" }}
            />
          <Stack.Screen
            name="Que4"
            component={Que4}
            options={{ title: "Questions" }}
            />
          <Stack.Screen
            name="Que5"
            component={Que5}
            options={{ title: "Questions" }}
            />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </AppState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
