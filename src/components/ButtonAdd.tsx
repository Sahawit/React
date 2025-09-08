import React from 'react';

// Define the type for the props explicitly
interface ButtonAddProps {
  setCount: (count: number) => void;
  count: number;
}

function ButtonAdd({ setCount, count }: ButtonAddProps) {
  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}

export default ButtonAdd;