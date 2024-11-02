import { useState } from "react";
import TextBox from "./TextBox";

interface Props {
  title: string;
  onSubmit: () => void;
  showId: boolean;
  message: string;
}

//"http://localhost:8080/api/v1/tours/insert"

function TourForm({ title, onSubmit, showId, message }: Props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { id, name, date, time, description };

    console.log(formData);

    fetch("http://localhost:8080/api/v1/tours/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("done? " + response.ok);
      })
      .catch((error) => console.log("Błąd: ", error));
  };

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit} className="form-inline">
        {showId === true && (
          <TextBox
            label="Id"
            type="text"
            placeHolder="ID"
            id="id"
            onChangeFun={(e) => {
              setId(e.target.value);
            }}
          />
        )}
        <TextBox
          label="Name"
          type="text"
          placeHolder="Name"
          id="name"
          onChangeFun={(e) => {
            setName(e.target.value);
          }}
        />
        <TextBox
          label="Date"
          type="text"
          placeHolder="Date"
          id="date"
          onChangeFun={(e) => {
            setDate(e.target.value);
          }}
        />
        <TextBox
          label="Time"
          type="text"
          placeHolder="Time"
          id="time"
          onChangeFun={(e) => {
            setTime(e.target.value);
          }}
        />
        <TextBox
          label="Desription"
          type="text"
          placeHolder="Desscription"
          id="description"
          onChangeFun={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary">
          Save Tour
        </button>
      </form>
      <p>{message}</p>
    </>
  );
}

export default TourForm;
