import { useEffect, useState } from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import useFetchBN from "../custom_hooks/useFetchBN";

function TourList() {
  const { data, loading, error } = useFetchBN<DT[]>(
    "http://localhost:8080/api/v1/tours/getAll"
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
        <div>
          <Link to="/">Home</Link>
          <h1>Tour List</h1>
          <ul>
            {data.map((item) => (
              <li key={item.tourId}>
                <Link to={`/tourList/${item.tourId}`}>
                  {item.tourId} {item.name} {item.date}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Render child content */}
          <Outlet />
        </div>
      </>
    );
  return <div>Something went wrong</div>;
}

export default TourList;
