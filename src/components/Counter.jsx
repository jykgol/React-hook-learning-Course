import { useState } from "react";


const Counter = () => {
  let [count,setCount] = useState(0);
  let change = (num) => {
    setCount(count+num);
  }

  return (
    <div className="App">
      <h2> likes = {count} </h2>
      <button onClick={() => change(1)}>increment</button>
      <button onClick={() => change(-1)}>decrement</button>
    </div>
  );
}

export default Counter;
