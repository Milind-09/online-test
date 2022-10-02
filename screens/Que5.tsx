import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Buttons from "../components/Buttons";

function Que5({navigation}:any) {

  function testResult(){
    navigation.navigate("Score")
  }

  return (
    <View>
      <Buttons />
      <Text>Q5. Match the following</Text>

      <Button title="submit" onPress={testResult}/>
    </View>
  );
}

export default Que5;
let styles = StyleSheet.create({});
