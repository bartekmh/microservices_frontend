import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "../App.css";
import Title from "../components/Title";
import Form from "../components/Form";
import TextBox from "../components/TextBox";
import TourForm from "../components/TourForm";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function TourAdd() {
  return (
    <>
      <Link to="/">Home</Link>
      <div>
        <TourForm
          title="Insert Tour"
          onSubmit={() => {
            console.log("submit");
          }}
          showId={false}
          message=""
        />
      </div>
    </>
  );
}

export default TourAdd;
