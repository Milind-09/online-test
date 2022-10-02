import React, { useState } from "react";
import AppContext from "./AppContext";

function AppState({ children }: any) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  let [open, setOpen] = useState(false);
  let [value, setValue] = useState("");
  let [items, setItems] = useState([
    { label: "English", value: "english" },
    { label: "Hindi", value: "hindi" },
  ]);


let [testScore, setTestScore] = useState(0)

  return (
    <AppContext.Provider
      value={{
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
        testScore, setTestScore
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppState;
