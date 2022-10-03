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

function Que2({ navigation }: any) {
  let { value, testScore, setTestScore, setQ2Ans }: any =
    React.useContext(AppContext);
  if (value === "english") {
    var ans = ["True", "False"];
  } else {
    var ans = ["सच", "असत्य"];
  }

  function chooseAns(i: any) {
    navigation.navigate("Que3");
    setQ2Ans(true);
    if (i === ans[0]) {
      setTestScore(testScore + 20);
    }
  }

  return (
    <View>
      <Buttons />
      {value === "english" ? (
        <View>
          <Text style={styles.que}>
            Q2. State whether true or false Props are methods into other
            components
          </Text>

          <FlatList
            data={ans}
            renderItem={({ item, index }) => {
              return (
                <View key={index}>
                  <View style={styles.ans}>
                    <TouchableOpacity onPress={() => chooseAns(item)}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.que}>
            Q2. बताएं कि क्या सही या गलत प्रॉप्स अन्य घटकों में विधियाँ हैं
          </Text>

          <FlatList
            data={ans}
            renderItem={({ item, index }) => {
              return (
                <View key={index}>
                  <View style={styles.ans}>
                    <TouchableOpacity onPress={() => chooseAns(item)}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
}

export default Que2;
let styles = StyleSheet.create({
  que: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20,
  },
  ans: {
    marginLeft: 10,
    marginTop: 20,
  },
});
