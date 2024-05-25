import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Budget = () => {
  const budget = 5000;
  const { data } = useContext(MyContext);
  const total = parseInt(
    data.reduce((acc, curr) => acc + parseInt(curr.value), 0)
  );
  return (
    <div>
      <h1>My Budget Planner</h1>
      <div>
        <div className="flex border">
          <h5>Budget:</h5>
          <p>Rs: {budget}</p>
        </div>
        <div className="flex">
          <h5>Remaining:</h5>
          <p>Rs: {budget - total}</p>
        </div>
        <div className="flex">
          <h5>Spant:</h5>
          <p>Rs: {total}</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
