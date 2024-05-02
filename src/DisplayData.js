import React from "react";

function DisplayData(props) {
  return (
    <div>
      {" "}
      <div className="submittedData">
        <h1>SubmittedData</h1>
        {console.log(props.val)}
        {props.val.map((data, index) => (
          <div key={index}>
            <p>
              {data.entName} ({data.entAge}) - {data.entCollege}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayData;
