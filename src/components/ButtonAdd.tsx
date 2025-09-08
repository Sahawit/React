import React from 'react';

// กำหนด Type ให้กับ props อย่างชัดเจน
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