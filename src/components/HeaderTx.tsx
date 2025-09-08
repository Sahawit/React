import ButtonAdd from "./ButtonAdd";

function HeaderTx({ name, fontSize, status}: {name: string, fontSize:string, status:boolen} ) {
    return (
    <>
      <h1
        className={status ? "green-txt" : "red-txt"}
        style={{ fontSize: `${fontSize}px` }}
      >
        {name}
      </h1>
    </>
  )
}

export default HeaderTx;