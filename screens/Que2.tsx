import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Buttons from "../components/Buttons";
import AppContext from "../context/AppContext";

function Que2() {
  let { testScore, setTestScore }: any = React.useContext(AppContext);

  let ans = ["True", "False"];

  function chooseAns(i: any) {
    if (i === ans[0]) {
      setTestScore(testScore + 20);
    }
  }
  return (
    <View>
      <Buttons />
      <Text>
        Q2. State whether true or false Props are methods into other components
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

export default Que2;
let styles = StyleSheet.create({});
