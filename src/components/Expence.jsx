import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Expence = () => {
  const { data, setData } = useContext(MyContext);

  const handleDeleteEvent = (index) => {
    const prevList = [...data];
    prevList.splice(index, 1);
    setData(prevList);
  };

  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="flex">
            <p>{item.name}</p>
            <p>{item.value}</p>
            <button onClick={() => handleDeleteEvent(index)}>Delete</button>
          </div>
        ))
      ) : (
        <div>
          <p>Please add some expenses to display.</p>
        </div>
      )}
    </div>
  );
};

export default Expence;
