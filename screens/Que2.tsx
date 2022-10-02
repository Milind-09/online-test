import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Buttons from "./Buttons";

function Que2() {
  return (
    <View>
      <Buttons />
      <Text>
        Q2. State whether true or false Props are methods into other components
      </Text>

      <TouchableOpacity>
        <Text>True</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>False</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Que2;
let styles = StyleSheet.create({});
