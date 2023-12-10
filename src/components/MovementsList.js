export function MovementsList({ movements, onHandleDeleteMov }) {
  return (
    <div className="movements-list">
      <div className="movements-header">
        <p>Description</p>
        <p> Value</p>
        <p>Type</p>
        <p>Date</p>
      </div>
      <hr />
      {movements.map((mov) => (
        <Movements
          movements={mov}
          onHandleDeleteMov={onHandleDeleteMov}
          key={mov.id}
        />
      ))}
    </div>
  );
}

function Movements({ movements, onHandleDeleteMov }) {
  return (
    <div className="movements">
      <p>{movements.description}</p>
      <p>{movements.value}</p>
      {movements.option === "entry" ? (
        <i
          className={"fa-regular fa-circle-up"}
          style={{ color: "#008000" }}
        ></i>
      ) : (
        <i
          className={"fa-regular fa-circle-down"}
          style={{ color: "#ff0000" }}
        ></i>
      )}
      <p>{movements.date}</p>

      <i
        className={"fa-solid fa-trash"}
        onClick={() => onHandleDeleteMov(movements.id)}
      ></i>
    </div>
  );
}
