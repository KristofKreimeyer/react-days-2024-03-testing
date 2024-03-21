import React from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
