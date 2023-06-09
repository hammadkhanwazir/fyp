import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../redux/features/presentations/presentationSlice";
import { useSession } from "next-auth/react";
const Presentation = () => {
  const { data: session } = useSession();
  const allEmployees = useSelector((state) => state.presentation.employees);
  const { department_name } = session.user;
  console.log(allEmployees);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees(department_name));
  }, []);
  return (
    <div className="presentation">
      <div className="presentation_wrapper flex gap-4">
        <div className="leftside">
          {allEmployees.map((x) => (
            <ul className="flex gap-4">
              <li>{x.name}</li>
              <li>{x.projects.length}</li>
            </ul>
          ))}
        </div>
        <div className="rightSide flex flex-col">
          <span>create presentation</span>
          <input type="text" placeholder="evaluator email here" />
          <input type="text" placeholder="project id here" />
          <input type="text" placeholder="write venue here" />
          <input type="datetime-local" />
        </div>
      </div>
    </div>
  );
};
export default Presentation;
