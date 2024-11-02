import "../App.css";
import { Link, Outlet } from "react-router-dom";

function TourList() {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Tour List</h1>
      <div>
        {/* Render child content */}
        <Outlet />
      </div>
    </>
  );
}

export default TourList;
