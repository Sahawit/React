import React from 'react';

// กำหนด Type สำหรับ Member
interface Member {
  nameTH: string;
  nameEN: string;
  heightCm: number;
  age: number;
  imageUrl?: string;
  group?: string;
}

// กำหนด Type สำหรับ Props ของ MemberList Component
interface MemberListProps {
  members: Member[]; // รายชื่อสมาชิกทั้งหมด
  groupName: string; // ชื่อกลุ่มที่ต้องการแสดง
}

const MemberList: React.FC<MemberListProps> = ({ members, groupName }) => {
  // กรองสมาชิกเฉพาะกลุ่มที่ระบุ
  const filteredMembers = members.filter(member => member.group === groupName);

  // กำหนดสีตัวอักษรตามชื่อกลุ่ม
  const getTextColor = (group?: string) => {
    if (group === 'BUS') {
      return 'green';
    } else if (group === 'Saja') {
      return 'skyblue';
    }
    return 'black'; // สีเริ่มต้นถ้าไม่มีกลุ่มหรือกลุ่มอื่น
  };

  if (filteredMembers.length === 0) {
    return <p>ไม่พบสมาชิกในกลุ่ม {groupName}</p>;
  }

  return (
    <div style={{ padding: '10px 0' }}>
      <h3>สมาชิกวง {groupName}</h3>
      <ul>
        {filteredMembers.map((member, index) => (
          <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            {member.imageUrl && (
              <img
                src={member.imageUrl}
                alt={member.nameEN}
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px', objectFit: 'cover' }}
              />
            )}
            <span style={{ color: getTextColor(member.group) }}>
              <strong>{member.nameTH}</strong> ({member.nameEN}) - ส่วนสูง: {member.heightCm} ซม., อายุ: {member.age} ปี
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;