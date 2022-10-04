import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import Buttons from "../components/Buttons";
import AppContext from "../context/AppContext";
// import DraggableFlatList from 'react-native-draggable-flatlist';

function Que5({ navigation }: any) {
  let {
    setGetScore,
    testScore,
    setTestScore,
    setEmail,
    setName,
    setPhone,
    setValue,
  }: any = React.useContext(AppContext);

  function testResult() {
    navigation.navigate("Score");
    setName("");
    setEmail("");
    setPhone("");
    setValue("");
    setGetScore(testScore);
    setTestScore(0);
  }

  return (
    <View>
      <Buttons />
      <Text style={styles.que}>Q5. Match the following</Text>

      <View style={styles.btn}>
        <Button title="submit" onPress={testResult} />
      </View>
    </View>
  );
}

export default Que5;
let styles = StyleSheet.create({
  btn: {
    width: 100,
    textAlign: "center",
    marginLeft: "32%",
    marginTop: 200,
  },
  que: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20,
  },
});
