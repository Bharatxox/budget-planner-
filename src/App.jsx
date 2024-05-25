import "./App.css";
import Budget from "./components/Budget";
import Expence from "./components/Expence";
import AddExpence from "./components/AddExpence";
import { MyContext } from "./context/MyContext";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(NaN);
  const [data, setData] = useState([]);

  return (
    <>
      <MyContext.Provider
        value={{ name, setName, value, setValue, data, setData }}
      >
        <Budget />
        <Expence />
        <AddExpence />
      </MyContext.Provider>
    </>
  );
}

export default App;
