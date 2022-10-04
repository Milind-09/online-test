import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";
import DropDownPicker from "react-native-dropdown-picker";
function Home({ navigation }: any) {
  let {
    open,
    setOpen,
    value,
    setValue,
    items,
    setItems,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    
    setGetValue,
  }: any = React.useContext(AppContext);

  function testScreen() {
    navigation.navigate("Que1");
    setGetValue(value);
  }

  return (
    <View>
      <Text style={styles.title}>Online Test </Text>
      <View style={styles.userData}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          keyboardType="number-pad"
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
        <View>
          <DropDownPicker
            style={styles.dropDown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Test Language"
          />
        </View>
      </View>

      {(name.length && phone.length && email.length && value.length) === 0 ? (
        <View style={styles.btn}>
          <Button title="Start Test" disabled />
        </View>
      ) : (
        <View style={styles.btn}>
          <Button title="Start Test" onPress={testScreen} />
        </View>
      )}
    </View>
  );
}

export default Home;

let styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  inputText: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 2,
    width: 200,
    textAlign: "center",
    margin: 10,
  },
  userData: {
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  dropDown: {
    width: 200,
  },
  btn: {
    width: 150,
    textAlign: "center",
    marginLeft: "27%",
    marginTop:10,
  },
});
