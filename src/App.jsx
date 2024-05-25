import "./App.css";
import Budget from "./components/Budget";
import Expence from "./components/Expence";
import AddExpence from "./components/AddExpence";
import { MyContext } from "./context/MyContext";
import { useState, useEffect } from "react";

function App() {
  const localStorageData = localStorage.getItem("budget");
  const initialData = localStorageData ? JSON.parse(localStorageData) : [];
  const [name, setName] = useState("");
  const [value, setValue] = useState(NaN);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const storedData = localStorage.getItem("budget");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

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
