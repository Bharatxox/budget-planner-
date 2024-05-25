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
    <div className="flex flex-col gap-3 w-[700px] mt-5">
      <h2 className="text-2xl font-bold ">Add expences</h2>
      <div className="flex justify-between w-full ">
        <div className="flex items-center w-5/12">
          {/* <p>Name</p> */}
          <input
            className="p-3 w-full mr-2 rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="flex items-center w-5/12">
          {/* <p>Cost</p> */}
          <input
            className="p-3 w-full mr-2 rounded-lg"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Cost"
          />
        </div>
        <button className="w-2/12" onClick={handleClickEvent}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddExpence;
