import React from "react";
import "./MyCard.css";

const MyCard = ({ firstname }) => {
  return (
    <div className="cardContainer">
      <div className="message">Bonjour à tous</div>
      <div className="nameLine">
        Je suis <span className="name"> {firstname} </span>
      </div>
      <div className="passionMessage">Je suis passioné par les étoiles...</div>
    </div>
  );
};

export default MyCard;
