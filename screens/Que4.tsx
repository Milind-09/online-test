import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet, Button } from "react-native";
import Buttons from "../components/Buttons";
import AppContext from "../context/AppContext";

function Que4({ navigation }: any) {
  let {getValue, testScore, setTestScore, setQ4Ans }: any = React.useContext(AppContext);

  let [opt1, setOpt1] = useState(false);
  let [opt2, setOpt2] = useState(false);
  let [opt3, setOpt3] = useState(false);
  let [opt4, setOpt4] = useState(false);
  
  function nextQue() {
    if (opt1 || opt2 || opt3 || opt4 === true) {
      setQ4Ans(true);
    }
    if ((opt1 && opt3) === true) {
      setTestScore(testScore + 20);
    }
    navigation.navigate("Que5");
  }

  return (
    <View>
      <Buttons />
      {getValue === "english" ? <View>
      <Text style={styles.que}>Q4. What are the advantages of React?</Text>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt1}
          onValueChange={setOpt1}
        />
        <Text style={styles.ans}>Use of Virtual DOM to improve efficiency</Text>
      </View>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt2}
          onValueChange={setOpt2}
        />
        <Text style={styles.ans}>​View mixed with logic by default</Text>
      </View>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt3}
          onValueChange={setOpt3}
        />
        <Text style={styles.ans}>Reusable components</Text>
      </View>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt4}
          onValueChange={setOpt4}
        />

        <Text style={styles.ans}>
          React is not a full-blown framework as {'\n'}  it is only a library
        </Text>
      </View>

      <View style={styles.btn}>
        <Button title="Next" onPress={nextQue} />
      </View>
      </View> : <View>
      <Text style={styles.que}>Q4. रिएक्ट के क्या फायदे हैं?</Text>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt1}
          onValueChange={setOpt1}
        />
        <Text style={styles.ans}>दक्षता में सुधार के लिए वर्चुअल डोम का उपयोग</Text>
      </View>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt2}
          onValueChange={setOpt2}
        />
        <Text style={styles.ans}>डिफ़ॉल्ट रूप से तर्क के साथ मिश्रित देखें</Text>
      </View>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt3}
          onValueChange={setOpt3}
        />
        <Text style={styles.ans}>पुन: प्रयोज्य घटक</Text>
      </View>
      <View style={styles.flexAns}>
        <Checkbox
          style={styles.selectBox}
          value={opt4}
          onValueChange={setOpt4}
        />

        <Text style={styles.ans}>
        React Js एक पूर्ण विकसित ढांचा नहीं है क्योंकि यह केवल है {"\n"}एक पुस्तकालय
        </Text>
      </View>

      <View style={styles.btn}>
        <Button title="Next" onPress={nextQue} />
      </View>
        </View>}
     
    </View>
  );
}

export default Que4;
let styles = StyleSheet.create({
  btn: {
    width: 100,
    textAlign: "center",
    marginLeft: 30,
    marginTop: 40,
  },
  flexAns: {
    flexDirection: "row",
  },
  que: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20,
  },
  selectBox: {
    marginLeft: 20,
    marginTop: 20,
  },
  ans: {
    marginTop: 20,
    marginLeft: 10,
  },
});
