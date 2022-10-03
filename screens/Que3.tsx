import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Buttons from "../components/Buttons";
import AppContext from "../context/AppContext";

function Que3({ navigation }: any) {
  let { value, testScore, setTestScore, setQ3Ans }: any =
    React.useContext(AppContext);

  let [inputValue, setInputValue] = useState("");

  function nextQue() {
    if (inputValue !== "") {
      setQ3Ans(true);
    }
    if (inputValue.toLowerCase().trim() === "javascript") {
      setTestScore(testScore + 20);
    }
    navigation.navigate("Que4");
  }

  return (
    <View>
      <Buttons />
      {value === "english" ? (
        <View>
          <View style={styles.container}>
            <View style={styles.queContainer}>
              <Text style={styles.queNo}>Q3.</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
              />
              <Text style={styles.que}>language is written in</Text>
              <Text>react.js</Text>
            </View>
            <View style={styles.btn}>
              <Button title="Next" onPress={nextQue} />
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.container}>
            <View style={styles.queContainer}>
              <Text style={styles.queNo}>Q3.</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
              />
              <Text style={styles.que}>भाषा में लिखा है</Text>
              <Text>react js</Text>
            </View>
            <View style={styles.btn}>
              <Button title="Next" onPress={nextQue} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default Que3;
let styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: 120,
    marginTop: 8,
    marginLeft: 5,
  },
  queContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  que: {
    marginTop: 12,
    marginLeft: 15,
  },
  queNo: {
    marginTop: 12,
    // marginLeft: 15,
  },
  container: {
    marginTop: 30,
  },
  btn: {
    width: 100,
    textAlign: "center",
    marginLeft: 30,
    marginTop: 40,
  },
});
