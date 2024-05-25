import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Budget = () => {
  const budget = 5000;
  const { data } = useContext(MyContext);
  const total = parseInt(
    data.reduce((acc, curr) => acc + parseInt(curr.value), 0)
  );
  return (
    <div className="flex flex-col gap-5 w-[700px] mb-10">
      <h1 className=" font-bold">My Budget Planner</h1>
      <div className="flex w-full justify-between">
        <div className="flex border-2 p-5 gap-2">
          <h5>Budget </h5>
          <p>Rs: {budget}</p>
        </div>
        <div className="flex border-2 p-5 gap-2">
          <h5>Remaining </h5>
          <p>Rs: {budget - total}</p>
        </div>
        <div className="flex border-2 p-5 gap-2">
          <h5>Spent </h5>
          <p>Rs: {total}</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
