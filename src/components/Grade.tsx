import { useState } from "react";

type Subject = {
  name: string;
  grade: string;
};

function GPAApp() {
  const [subjectName, setSubjectName] = useState<string>(""); // ชื่อวิชา
  const [grade, setGrade] = useState<string>("A"); // เกรด
  const [subjects, setSubjects] = useState<Subject[]>([]); // รายวิชาทั้งหมด
  const [gpa, setGpa] = useState<number | null>(null); // ค่า GPA

  // Mapping เกรด → ค่าหน่วยคะแนน
  const gradePointMap: Record<string, number> = {
    A: 4.0,
    "B+": 3.5,
    B: 3.0,
    "C+": 2.5,
    C: 2.0,
    "D+": 1.5,
    D: 1.0,
    F: 0.0,
    W: -1, // W ไม่คิดคะแนน
  };

  // เพิ่มวิชา
  const addSubject = () => {
    if (subjectName.trim() === "") return;
    setSubjects([...subjects, { name: subjectName, grade }]);
    setSubjectName("");
    setGrade("A");
    setGpa(null); // เคลียร์ผล GPA หลังเพิ่มวิชา
  };

  // ลบวิชา
  const deleteSubject = (index: number) => {
    const newSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(newSubjects);
    setGpa(null); // เคลียร์ผล GPA หลังลบวิชา
  };

  // คำนวณ GPA
  const calculateGPA = () => {
    // กรองวิชาที่ไม่ใช่ W
    const validSubjects = subjects.filter((s) => s.grade !== "W");

    if (validSubjects.length === 0) {
      setGpa(0);
      return;
    }

    const totalPoints = validSubjects.reduce(
      (sum, s) => sum + gradePointMap[s.grade],
      0
    );

    const result = totalPoints / validSubjects.length;
    setGpa(parseFloat(result.toFixed(2))); // ปัดทศนิยม 2 ตำแหน่ง
  };

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h1>GPA Calculator</h1>

      {/* Input ชื่อวิชา */}
      <input
        type="text"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="พิมพ์ชื่อวิชา..."
        style={{ marginRight: 10 }}
      />

      {/* Dropdown เกรด */}
      <select
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        style={{ marginRight: 10 }}
      >
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
        <option value="W">W</option>
      </select>

      <button onClick={addSubject}>เพิ่มวิชา</button>

      {/* แสดงรายชื่อวิชา */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {subjects.map((s, index) => (
          <li
            key={index}
            style={{
              margin: "8px 0",
              color: s.grade === "F" ? "red" : "black",
            }}
          >
            {s.name} - {s.grade}
            <button
              onClick={() => deleteSubject(index)}
              style={{ marginLeft: 10, color: "red" }}
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>

      {/* ปุ่มคำนวณ GPA */}
      {subjects.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <button onClick={calculateGPA}>คำนวณ GPA</button>
          {gpa !== null && (
            <h2 style={{ marginTop: 10 }}>GPA: {gpa.toFixed(2)}</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default GPAApp;
