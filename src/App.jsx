import React from "react";
import "./SCSS/styles.scss";

const App = () => {
  const imgURL =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/womanyellingcat-1573233850.jpg?resize=480:*";
  return (
    <div className="app">
      <h1>welcome to react</h1>
      <img src={imgURL} alt="img" />
      <div>
        <p>react</p>
        <p style={{ marginLeft: "2rem" }}>re act</p>
      </div>
    </div>
  );
};

export default App;
