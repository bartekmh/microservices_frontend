import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "../App.css";
import Title from "../components/Title";
import Form from "../components/Form";
import TextBox from "../components/TextBox";
import TourForm from "../components/TourForm";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function TourHome() {
  return (
    <div>
      <Link to="/tourList">Tour list</Link>
      <Link to="/tourAdd">Add Tour</Link>
    </div>
  );
}

export default TourHome;
