import React, { useState, useRef } from "react";
import "./Details.css";
import ErrorModel from "./ErrorModel";
import Button from "./Button";
import DisplayData from "./DisplayData";
function Details() {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [val, setVal] = useState([]);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const entName = nameInputRef.current.value;
    const entAge = ageInputRef.current.value;
    const entCollege = collegeInputRef.current.value;
    if (entName.trim() === "") {
      setError({
        title: "Invalid Input",
        message: "Name should not be empty",
      });
      return;
    }
    if (entAge.trim() === "") {
      setError({
        title: "Invalid Input",
        message: "age field should not be empty",
      });
      return;
    }
    if (entAge < 0) {
      setError({
        title: "Invalid Input",
        message: "age field should be positive",
      });
      return;
    }
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
    setError("");
    const newData = { entName, entAge, entCollege };
    console.log(newData);
    setVal((prevData) => [...prevData, newData]);
    //console.log("Button Clicked");
  };

  return (
    <>
      <div className="formClass">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" ref={ageInputRef} />
          </div>
          <div>
            <label htmlFor="clgName">College Name:</label>
            <input type="text" id="clgName" ref={collegeInputRef} />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
      <DisplayData val={val}></DisplayData>

      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onClose={() => setError(null)}
        ></ErrorModel>
      )}
    </>
  );
}

export default Details;
