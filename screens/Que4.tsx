import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet } from "react-native";
import Buttons from "./Buttons";

function Que4() {
  let [opt1, setOpt1] = useState(false);
  let [opt2, setOpt2] = useState(false);
  let [opt3, setOpt3] = useState(false);
  let [opt4, setOpt4] = useState(false);
  return (
    <View>
      <Buttons />
      <Text>Q4. What are the advantages of React?</Text>
      <View>
        <Checkbox value={opt1} onValueChange={setOpt1} />
        <Text>Use of Virtual DOM to improve efficiency</Text>
      </View>
      <View>
        <Checkbox value={opt2} onValueChange={setOpt2} />
        <Text>​View mixed with logic by default</Text>
      </View>
      <View>
        <Checkbox value={opt3} onValueChange={setOpt3} />
        <Text>Reusable components</Text>
      </View>
      <View>
        <Checkbox value={opt4} onValueChange={setOpt4} />
        <Text>React is not a full-blown framework as it is only a library</Text>
      </View>
    </View>
  );
}

export default Que4;
let styles = StyleSheet.create({});
