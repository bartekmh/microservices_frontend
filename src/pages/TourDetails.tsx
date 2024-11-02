import "../App.css";
import { Link, useParams } from "react-router-dom";

function TourDetails() {
  const params = useParams<{ tourId: string }>();
  return <>Tour detail: {params.tourId}</>;
}

export default TourDetails;
