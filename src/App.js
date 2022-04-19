import MyCard from "./components/MyCard";
import "./App.css";
import { useState } from "react";
import IssCard from "./components/IssCard";

function App() {
  const [cardIsOpen, setCardIsOpen] = useState(false);
  const [issTrackIsOpen, setIssTrackIsOpen] = useState(false);

  const displayCard = () => {
    setCardIsOpen(!cardIsOpen);
  };

  return (
    <div className="appContainer">
      <button className="btnHome" onClick={displayCard}>
        Qui suis-je
      </button>
      {cardIsOpen ? <MyCard firstname={"nicolas"} /> : ""}

      <button
        className="btnHome"
        onClick={() => setIssTrackIsOpen(!issTrackIsOpen)}
      >
        {" "}
        Voir plus...
      </button>
      {issTrackIsOpen ? <IssCard /> : ""}
    </div>
  );
}

export default App;
