import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Buttons from "../components/Buttons";
import AppContext from "../context/AppContext";

function Que1({ navigation }: any) {
  let { getValue, setTestScore, setQ1Ans }: any = React.useContext(AppContext);
  if (getValue === "english") {
    var ans = [
      "Original DOM",
      "Virtual DOM",
      "Both A and B.",
      "None of the above.",
    ];
  } else {
    var ans = [
      "मूल डोम",
      "वर्चुअल डोम",
      "A और B दोनों।",
      "इनमे से कोई भी नहीं।",
    ];
  }

  function chooseAns(i: any) {
    setQ1Ans(true);
    navigation.navigate("Que2");
    if (i === ans[1]) {
      setTestScore(20);
    }
  }

  return (
    <View>
      <Buttons />
      {getValue === "english" ? (
        <View>
          <Text style={styles.que}>
            Q1. What of the following is used in React.js to increase
            performance?
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
            Q1. निम्नलिखित में से किसका उपयोग React.js में बढ़ाने के लिए किया
            जाता है प्रदर्शन?
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

export default Que1;
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
