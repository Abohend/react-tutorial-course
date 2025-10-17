import { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "Peter",
        age: 24,
        hoppy: "Read Books",
    });
    const showJohn = () => {
        setPerson({
                name: "John",
                age: 28,
                hoppy: "Scream at the computer",
            }
        );
    };
    return (
        <>
            <h2>useState object example</h2>
            <Person {...person} />
            <button className="btn" onClick={showJohn}>
                Show John
            </button>
        </>
    );
};

const Person = ({ name, age, hoppy }) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h4>Enjoys To: {hoppy}</h4>
        </div>
    );
};

export default UseStateObject;
