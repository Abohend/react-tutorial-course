import { useState } from "react";

const ToggleChallenge = () => {
  const [val, setVal] = useState(false);

  return <>
    <button className="btn" onClick={() => setVal(!val)}>Click me</button>
    {/* {(val)? <h2>Hi</h2> : <></>} */}
    {val || <h2>Hi</h2>}
  </>;
};

export default ToggleChallenge;
