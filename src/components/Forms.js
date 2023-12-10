import { useState } from "react";

export function Forms({ onHandleAddMov }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [option, setOption] = useState("entry");

  return (
    <form
      className="forms"
      onSubmit={(e) => {
        e.preventDefault();

        if (!description || !value) return;

        onHandleAddMov({
          description,
          value,
          option,
          date: new Date().toLocaleDateString(),
          id: Date.now(),
        });
      }}
    >
      <div className="description">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="value">
        <label htmlFor="value">Value</label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>

      <div className="options">
        <div className="entry">
          <input
            type="radio"
            id="entry"
            value="entry"
            checked={option === "entry"}
            onChange={(e) => setOption(e.target.value)}
          />
          {/* fazer condição para verificar se clicou ou não depois */}
          <label htmlFor="entry">Entry</label>
        </div>

        <div className="exit">
          <input
            type="radio"
            id="exit"
            value="exit"
            checked={option === "exit"}
            onChange={(e) => setOption(e.target.value)}
          />
          <label htmlFor="exit">Exit</label>
        </div>
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}
