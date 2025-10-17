import { useState } from "react";

const UseStateBasic = () => {
    const [cnt, setCnt] = useState(0);
    console.log(cnt);
    return (
        <div>
            <h2>You Clicked {cnt} Times</h2>
            <button onClick={() => setCnt(cnt + 1)}>Increment</button>
        </div>
    );
};

export default UseStateBasic;
