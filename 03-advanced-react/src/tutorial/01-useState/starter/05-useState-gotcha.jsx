import { useState } from "react";

const UseStateGotcha = () => {
    const [val, setVal] = useState(0);
    const increase = () => {
        setTimeout(() => {
            setVal((curVal) => curVal + 1);
        }, 2000);
    };
    return (
        <div>
            <h2>useState "gotcha"</h2>
            <h1>{val}</h1>
            <button className="btn" onClick={increase}>
                Increase
            </button>
        </div>
    );
};

export default UseStateGotcha;
