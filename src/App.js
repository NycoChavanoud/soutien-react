import MyCard from "./components/MyCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [cardIsOpen, setCardIsOpen] = useState(false);

  const displayCard = () => {
    setCardIsOpen(!cardIsOpen);
  };

  return (
    <div className="appContainer">
      <button className="btnHome" onClick={displayCard}>
        Qui suis-je
      </button>
      {cardIsOpen ? <MyCard firstname={"nicolas"} /> : ""}
    </div>
  );
}

export default App;
