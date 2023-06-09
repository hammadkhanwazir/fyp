import { useContext, useState } from "react";
import { StudentGroupContext } from "../../context/StudentGroup";

const StudentList = ({ onDelete, student, onSubmit, onEdit }) => {
  const { editRegNo, setEditRegNo } = useContext(StudentGroupContext);
  return (
    <tr className="studentlist_tr text-black">
      <td className="border  cursor-pointer text-center p-2">
        {student.reg_no}
      </td>
      <td className="border  cursor-pointer text-center p-2">{student.name}</td>
      <td className="border  cursor-pointer text-center p-2">
        {student.contact_no}
      </td>
      <td className="border  cursor-pointer text-center p-2">
        {student.email}
      </td>
      <td className="border flex gap-4 items-center justify-center cursor-pointer text-center p-2">
        <span
          onClick={() => onDelete(student.reg_no)}
          className="bg-slate-700 p-2 rounded-xl hover:bg-slate-500 text-white"
        >
          Delete
        </span>
        <span
          onClick={() => {
            setEditRegNo(student.reg_no);
            onEdit(student.reg_no);
          }}
          className="bg-slate-700 p-2 rounded-xl hover:bg-slate-500 text-white"
        >
          Edit
        </span>
      </td>
    </tr>
  );
};
export default StudentList;
