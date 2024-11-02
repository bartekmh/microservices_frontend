import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import TextBox from "./components/TextBox";
import TourForm from "./components/TourForm";
import Button from "./components/Button";

function App() {
  return (
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
  );
}

export default App;
