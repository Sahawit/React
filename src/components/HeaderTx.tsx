import React from 'react';

// ถ้าไม่ได้ใช้ ButtonAdd ในไฟล์นี้ ให้ลบ import ออกได้เลยครับ
// import ButtonAdd from "./ButtonAdd"; 

function HeaderTx({ name, fontSize, status }: { name: string, fontSize: string, status: boolean }) {
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