import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Que1 from "./Que1";
import Que2 from "./Que2";
import Que3 from "./Que3";
import Que5 from "./Que5";
import Que4 from "./Que4";


function Buttons() {
  const navigation:any = useNavigation();
  return (
    <View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(Que1)}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(Que2)} >
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(Que3)}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(Que4)}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(Que5)}>
          <Text>5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Buttons;
let styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    paddingVertical: 20,
  },
  btn: {
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
