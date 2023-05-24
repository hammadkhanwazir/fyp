const FacultyTable = ({ list }) => {
  return (
    <div class="container mx-auto flex items-center justify-center">
      {list?.length > 0 ? (
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Contact</th>
              <th class="px-4 py-2">Panel Number</th>
              <th class="px-4 py-2">Project Id</th>
              <th class="px-4 py-2">Edit Record</th>
              <th class="px-4 py-2">Delete</th>
            </tr>
          </thead>
          {list.map((x) => (
            <tbody>
              <tr>
                <td class="border px-8 py-2">{x.name}</td>
                <td class="border px-8 py-2">{x.email}</td>
                <td class="border px-8 py-2">{x.contact_no}</td>
                <td class="border px-8 py-2">
                  {x.panelNumber === null ? (
                    <span>Not Assigned</span>
                  ) : (
                    x?.panelNumber
                  )}
                </td>
                <td class="border px-8 py-2">{x?.projectId}</td>
                <td class="border px-8 py-2 hover:bg-green-600 hover:text-white cursor-pointer">
                  Edit
                </td>
                <td class="border px-8 py-2 hover:bg-red-600 hover:text-white cursor-pointer">
                  Delete
                </td>
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

export default FacultyTable;
