import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Buttons from "../components/Buttons";
import AppContext from "../context/AppContext";

function Que1() {
  let {  setTestScore }: any = React.useContext(AppContext);

  let ans = [
    "Original DOM",
    "Virtual DOM",
    "Both A and B.",
    "None of the above.",
  ];

  function chooseAns(i: any) {
    if (i === ans[1]) {
      setTestScore(20);
    }
  }

  return (
    <View>
      <Buttons />
      <Text>
        Q1. What of the following is used in React.js to increase performance?{" "}
      </Text>

      <FlatList
        data={ans}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <View>
                <TouchableOpacity onPress={() => chooseAns(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Que1;
let styles = StyleSheet.create({});
