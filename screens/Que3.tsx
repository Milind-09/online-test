import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Buttons from "../components/Buttons";
import AppContext from "../context/AppContext";

function Que3({ navigation }: any) {
  let { testScore, setTestScore }: any = React.useContext(AppContext);

  let [inputValue, setInputValue] = useState("");

  function nextQue() {
        if (inputValue.toLowerCase().trim() === "javascript") {
      setTestScore(testScore + 20);
    }
    navigation.navigate("Que4")
  }

  return (
    <View>
      <Buttons />
      <View>
        <TextInput
          onChangeText={(text) => setInputValue(text)}
          value={inputValue} 
        />
        <Text>language is written in react.js</Text>
      </View>
      <TouchableOpacity onPress={nextQue}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Que3;
let styles = StyleSheet.create({});
