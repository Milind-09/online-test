import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppContext from "../context/AppContext";
import PieChart from "react-native-expo-pie-chart";
export default function Score() {
  let { testScore }: any = React.useContext(AppContext);
  let wrongAns = 100 - testScore;
  let correctAns = testScore;
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
      <View style={styles.result}>
        <View style={styles.red}></View>
        <Text style={styles.percent}>{wrongAns}%</Text>
      </View>

      <View style={styles.result}>
        <View style={styles.green}></View>
        <Text style={styles.percent}>{correctAns}%</Text>
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
  result:{
    flexDirection:"row"
  },
  percent:{
    marginLeft:10,
  }
});
