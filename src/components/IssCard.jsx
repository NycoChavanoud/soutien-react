import axios from "axios";
import React, { useState } from "react";
import "./IssCard.css";

const IssCard = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const fecthIss = () => {
    axios
      .get("http://api.open-notify.org/iss-now.json")
      .then((res) => res.data)
      .then((data) => {
        setLongitude(data.iss_position.longitude);
        setLatitude(data.iss_position.longitude);
      });
  };

  return (
    <div className="issContainer">
      <button className="btnToFetchIss" onClick={fecthIss}>
        Iss Position
      </button>
      {latitude ? (
        <>
          <div>Actuellement, l'iss est au dessu de notre terre :</div>
          <div>latitude : {latitude}</div>
          <div>longitude : {longitude} </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default IssCard;
