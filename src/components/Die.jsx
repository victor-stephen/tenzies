export default function Die({ dieObj, holdDice }) {
  // console.log(dieObj)
  const styles = {
    background: dieObj.isHeld ? "#59E391" : "#fff",
    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.15)",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "1.287rem",
    alignItems: "center",
    lineHeight: "60px",
    border: "none",
  };

  return (
    <button
      onClick={holdDice}
      className="die"
      style={styles}
      aria-pressed={dieObj.isHeld}
      aria-label={`Die with value ${dieObj.value}, ${
        dieObj.isHeld ? "held" : "not held"
      } `}
    >
      {dieObj.value}
    </button>
  );
}
