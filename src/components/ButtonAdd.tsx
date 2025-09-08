function ButtonAdd({ setCount, count }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      count
    </button>
  )
}

export default ButtonAdd
