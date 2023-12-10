import { useState } from "react";
import "./App.css";
import { Forms } from "./components/Forms";
import { MovementsList } from "./components/MovementsList";
import { OutputBoxes } from "./components/OutputBoxes";

function App() {
  const [movements, setMovements] = useState([]);

  function handleAddMov(newMov) {
    setMovements([...movements, newMov]);
  }

  function handleDeleteMov(id) {
    setMovements(movements.filter((mov) => mov.id !== id));
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Financial Control</h1>
      </div>
      <OutputBoxes movements={movements} />
      <Forms onHandleAddMov={handleAddMov} />
      <MovementsList
        movements={movements}
        onHandleDeleteMov={handleDeleteMov}
      />
    </div>
  );
}

export default App;
