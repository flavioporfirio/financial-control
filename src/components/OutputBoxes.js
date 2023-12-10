export function OutputBoxes({ movements }) {
  const movEntry = movements
    .filter((mov) => mov.option === "entry")
    .reduce((acc, mov) => acc + mov.value, 0);

  const movExit = movements
    .filter((mov) => mov.option === "exit")
    .reduce((acc, mov) => acc + mov.value, 0);

  return (
    <div className="output-boxes">
      <Box
        boxTitle="Entries"
        img="fa-circle-up"
        quantity={movEntry.toFixed(2)}
      />
      <Box
        boxTitle="Exits"
        img="fa-circle-down"
        quantity={movExit.toFixed(2)}
      />
      <Box
        boxTitle="Total"
        img="fa-solid fa-dollar-sign"
        quantity={(movEntry - movExit).toFixed(2)}
      />
    </div>
  );
}

function Box({ boxTitle, img, quantity }) {
  return (
    <div className="box">
      <div className="box-top">
        <p>{boxTitle}</p>
        <i className={`fa-regular ${img}`}></i>
      </div>
      <p>R$ {quantity}</p>
    </div>
  );
}
