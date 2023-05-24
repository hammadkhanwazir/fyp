import PresentationList from "../../../components/coordinator/presentation/presentationList";
import { useSelector } from "react-redux";
const AllPresentationsPage = () => {
  const completedPresentations = useSelector((state) =>
    state.coordPresentation.allPresentations.filter(
      (presentation) => presentation.status === "COMPLETED"
    )
  );
  console.log("These are completed presentations");
  console.log(completedPresentations);
  return (
    <div className="allPresentations">
      <div className="allPresentationsWrapper">
        <PresentationList allPresentations={completedPresentations} />
      </div>
    </div>
  );
};
export default AllPresentationsPage;
