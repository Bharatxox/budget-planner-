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
    <div className="flex flex-col items-center w-[700px] gap-3">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className="flex items-center  bg-zinc-700  py-2 px-4 w-full rounded-sm"
          >
            <p className="w-8/12 text-left">{item.name}</p>
            <p className="w-2/12">{item.value}</p>
            <button className="w-2/12" onClick={() => handleDeleteEvent(index)}>
              Delete
            </button>
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
