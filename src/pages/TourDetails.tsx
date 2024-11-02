import "../App.css";
import { Link, useParams } from "react-router-dom";
import useFetchBN from "../custom_hooks/useFetchBN";

function TourDetails() {
  const params = useParams<{ tourId: string }>();
  const { data, loading, error } = useFetchBN<DT>(
    "http://localhost:8080/api/v1/tours/get/" + params.tourId
  );

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <>
        <div>Error: {error.message}</div>
      </>
    );
  }
  if (data != null)
    return (
      <>
        <div>Tour detail: {params.tourId}</div>
        <p>Date: {data.date}</p>
        <p>Time: {data.time}</p>
        <p>Description: {data.description}</p>
        <p>Name: {data.name}</p>
        <p>TourId: {data.tourId}</p>
      </>
    );
  return <div>Something went wrong</div>;
}

export default TourDetails;
