import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const color = isOn ? "red" : "white";
  const handleClick = () => setIsOn(isOn => !isOn);
  

  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "On" : "Off"}</button>;
}

export default Toggle;
