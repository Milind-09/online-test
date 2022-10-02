import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Buttons from "./Buttons";

function Que1() {
  let ans = [
    "Original DOM",
    "Virtual DOM",
    "Both A and B.",
    "None of the above.",
  ];

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
                <TouchableOpacity>
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
