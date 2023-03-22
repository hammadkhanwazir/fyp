import { useContext } from "react";
import { NavbarContext } from "../navbarContext";
import { useSelector } from "react-redux";
import AddEmployee from "./AddEmp";
import AddProject2 from "./addProject";
import Presentation from "../presentation";
const ViewPanel = () => {
  const allPanels = useSelector((state) => state.panel.panel);
  console.log("view panel");
  const allEmployees = useSelector(
    (state) => state.coordinator.projects.employee
  );
  const allProjects = useSelector(
    (state) => state.coordinator.projects.projects
  );
  console.log(allEmployees);
  console.log("all panels ");
  console.log(allPanels);
  const {
    id,
    setId,
    setViewMore,
    more,
    setAddEmployee,
    addEmployee,
    addProject,
    setAddProject,
  } = useContext(NavbarContext);
  console.log(id);
  const panel = allPanels.filter((x) => x.id === id);
  console.log("panel 2 ");
  const panel2 = panel[0];
  console.log(panel2);
  console.log(panel);
  console.log(panel);
  console.log(id);
  return (
    <div className="viewPanel">
      <div className="viewPanel_wrapper">
        <div className="flex flex-col relative">
          <div>
            <span>Panel Number : {panel2?.id}</span>
          </div>
          <div className="flex items-center justify-center">
            Employee Detail
          </div>
          <span
            className="close absolute right-10 bg-red-600 text-white rounded-lg p-2  cursor-pointer"
            onClick={() => {
              console.log("clicked");
              setId(panel2?.id);
              setViewMore(false);
            }}
          >
            Close
          </span>
        </div>
        <table className="table  mt-8 bg-slate-200 w-full   border-collapse border-slate-500  ">
          <tbody>
            <tr className="bg-slate-600  border-blue-500 text-3xl text-white">
              <th className="border text-center p-2">Email</th>
              <th className="border text-center p-2">name</th>
              <th className="border text-center p-2">contact no</th>
              <th className="border text-center p-2">Remove</th>
            </tr>
            {panel2?.Employees.map((x) => (
              <tr className="studentlist_tr text-black">
                <td className="border  cursor-pointer text-center p-2">
                  {x?.email}
                </td>
                <td className="border  cursor-pointer text-center p-2">
                  {x?.name}
                </td>
                <td className="border  cursor-pointer text-center p-2">
                  {x?.contact_no}
                </td>
                <td className="border flex gap-4 items-center justify-center cursor-pointer text-center p-2">
                  <span
                    onClick={() => {
                      console.log("clicked");
                      setId(panel2?.id);
                      setViewMore(true);
                    }}
                    className="bg-green-700 p-2 rounded-lg text-white cursor-pointer"
                  >
                    Remove
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <div className="mt-8">
          <span
            onClick={() => setAddEmployee(!addEmployee)}
            className={
              addEmployee
                ? "bg-red-700 cursor-pointer text-white p-2 rounded-lg m-2 mt-8"
                : "bg-green-700 cursor-pointer text-white p-2 rounded-lg m-2 mt-8"
            }
          >
            {addEmployee ? <span>Cancel </span> : <span>Add Employee</span>}
          </span>
          {addEmployee ? (
            <AddEmployee employees={allEmployees} id={panel2?.id} />
          ) : (
            ""
          )}
        </div>
        <div className=" flex items-center justify-center">
          {" "}
          <span>Project Details</span>
        </div>
        <table className="table  mt-8 bg-slate-200 w-full   border-collapse border-slate-500  ">
          <tbody>
            <tr className="bg-slate-600  border-blue-500 text-3xl text-white">
              <th className="border text-center p-2">Project Id</th>
              <th className="border text-center p-2">Title</th>
              <th className="border text-center p-2">Admin Student</th>
              <th className="border text-center p-2">
                Presentation Date and Time
              </th>
              <th className="border text-center p-2"> Presentation Venue</th>
            </tr>
            {panel2?.projects.map((x) => (
              <tr className="studentlist_tr text-black">
                <td className="border  cursor-pointer text-center p-2">
                  {x.id}
                </td>
                <td className="border  cursor-pointer text-center p-2">
                  {x.title}
                </td>
                <td className="border  cursor-pointer text-center p-2">
                  {x.admin_student_email}
                </td>
                {x.Presentation_Scedule.date ? (
                  <>
                    <td className="border  cursor-pointer text-center p-2">
                      {x.Presentation_Scedule.date}
                    </td>
                    <td className="border  cursor-pointer text-center p-2">
                      {x.Presentation_Scedule.venue}
                    </td>{" "}
                  </>
                ) : (
                  <span>Add Presentation </span>
                )}
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <div className="mt-8">
          <span
            onClick={() => setAddProject(!addProject)}
            className={
              addProject
                ? "bg-red-700 cursor-pointer text-white p-2 rounded-lg m-2 mt-8"
                : "bg-green-700 cursor-pointer text-white p-2 rounded-lg m-2 mt-8"
            }
          >
            {addProject ? <span>Cancel </span> : <span>Add Project</span>}
          </span>
          {addProject ? (
            <AddProject2 projects={allProjects} id={panel2?.id} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default ViewPanel;
