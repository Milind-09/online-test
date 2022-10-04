import React, { useState } from "react";
import AppContext from "./AppContext";

function AppState({ children }: any) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  let [open, setOpen] = useState(false);
  let [value, setValue] = useState("");
  let [getValue, setGetValue] = useState("");
  let [items, setItems] = useState([
    { label: "English", value: "english" },
    { label: "Hindi", value: "hindi" },
  ]);

  let [q1Ans, setQ1Ans] = useState(false);
  let [q2Ans, setQ2Ans] = useState(false);
  let [q3Ans, setQ3Ans] = useState(false);
  let [q4Ans, setQ4Ans] = useState(false);
  let [q5Ans, setQ5Ans] = useState(false);

  let [testScore, setTestScore] = useState(0);
  let [getScore, setGetScore] = useState(0);
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
        testScore,
        setTestScore,
        q1Ans,
        setQ1Ans,
        q2Ans,
        setQ2Ans,
        q3Ans,
        setQ3Ans,
        q4Ans,
        setQ4Ans,
        q5Ans,
        setQ5Ans,
        getValue,
        setGetValue,
        getScore, setGetScore
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppState;
