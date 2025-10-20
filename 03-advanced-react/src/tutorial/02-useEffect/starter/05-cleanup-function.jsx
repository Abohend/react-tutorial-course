import { useEffect, useState } from "react";

const CleanupFunction = () => {
    const [val, setVal] = useState(false);

    return (
        <>
            <button className="btn" onClick={() => setVal(!val)}>
                Toggle Value
            </button>
            {val && <User />}
        </>
    );
};

const User = () => {
    useEffect(() => {
        console.log("user rendered");
        // const intervalId = setInterval(() => {
        //   console.log("from interval");
        // }, 1000);
        // return () => clearInterval(intervalId);

        window.addEventListener('scroll', console.log("scrolling..."));
        return window.removeEventListener('scroll')
    }, []);

    return (
        <>
            <h2>"Mohamed Abohend"</h2>
            <p>"Computer and Automatic Control Engineer"</p>
        </>
    );
};

export default CleanupFunction;
