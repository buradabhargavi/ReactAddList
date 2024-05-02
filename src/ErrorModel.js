import React from "react";
import Button from "./Button";
import "./ErrorModel.css";
function ErrorModel(props) {
  return (
    <div className="error-modal">
      <div className="error-content">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button type="submit" onClick={props.onClose}>
            Okay, I understood
          </Button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModel;
