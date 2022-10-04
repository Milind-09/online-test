import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import AppContext from "../context/AppContext";
import PieChart from "react-native-expo-pie-chart";
export default function Score({ navigation }: any) {

  let {
    getScore,
    setGetScore,
    setQ1Ans,
    setQ2Ans,
    setQ3Ans,
    setQ4Ans,
    setQ5Ans,
  }: any = React.useContext(AppContext);


  let wrongAns = 100 - getScore;
  let correctAns = getScore;

  function home() {
    navigation.navigate("Home");
    setGetScore(0);
    setQ1Ans(false);
    setQ2Ans(false);
    setQ3Ans(false);
    setQ4Ans(false);
    setQ5Ans(false);
  }
  return (
    <View style={styles.container}>
      <PieChart
        data={[
          {
            key: "First Data",
            count: wrongAns,
            color: "red",
          },
          {
            key: "Second Data",
            count: correctAns,
            color: "green",
          },
        ]}
        length={150}
      />
      <View style={[styles.result,{marginTop:70}]}>
        <View style={styles.green}></View>
        <Text style={styles.percent}>{correctAns}% Correct Answer</Text>
      </View>
      <View style={styles.result}>
        <View style={styles.red}></View>
        <Text style={styles.percent}>{wrongAns}% Wrong Answer</Text>
      </View>

      <View style={styles.btn}>
        <Button title="Home" onPress={home} />
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  red: {
    height: 10,
    width: 10,
    backgroundColor: "red",

    marginLeft: 10,
  },
  green: {
    height: 10,
    width: 10,
    backgroundColor: "green",
    marginLeft: 10,
    marginTop: 5,
  },
  result: {
    flexDirection: "row",
   
  },
  percent: {
    marginLeft: 10,
  },
  btn: {
    width: 100,
    textAlign: "center",
    marginLeft: "32%",
    marginTop: 70,
  },
});
