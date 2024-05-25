import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const AddExpence = () => {
  const { name, setName, value, setValue, data, setData } =
    useContext(MyContext);

  const handleClickEvent = async (e) => {
    if (!name || !value) {
      alert(
        "Please provide a value for this element before adding it to the DOM."
      );
      return;
    }
    e.preventDefault();
    await setData([...data, { name: name, value: value }]);
    setName("");
    setValue("");
    console.log(data);
    console.log(value);
    console.log(name);
  };

  return (
    <div>
      <h1>Add expences</h1>
      <div>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>Name</p>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button onClick={handleClickEvent}>Add</button>
    </div>
  );
};

export default AddExpence;
