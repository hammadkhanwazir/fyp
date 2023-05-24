import { useSelector } from "react-redux";
const Table = () => {
  const students = useSelector((state) => state.student?.projects?.students);
  console.log(students);
  return (
    <div class="container mx-auto flex items-center justify-center">
      {students?.length > 0 ? (
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Contact</th>
              <th class="px-4 py-2">Reg No</th>
            </tr>
          </thead>
          {students.map((x) => (
            <tbody>
              <tr>
                <td class="border px-8 py-2">{x.name}</td>
                <td class="border px-8 py-2">{x.email}</td>
                <td class="border px-8 py-2">{x.contact_no}</td>
                <td class="border px-8 py-2">{x.reg_no}</td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <div>
          <span>No member was found in this group</span>
        </div>
      )}
    </div>
  );
};

export default Table;
