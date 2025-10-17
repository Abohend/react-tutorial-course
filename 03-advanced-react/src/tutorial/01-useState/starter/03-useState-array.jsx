import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const RemoveAll = () => {
        setPeople([]);
    };

    const RemoveOne = (id) => {
        setPeople(people.filter(person => person.id !== id));
    };

    return (
        <div>
            <h2>useState array example</h2>
            <div id="persons">
                {people.map((person) => {
                    return <Person {...person} RemoveOne={RemoveOne} key={person.id} />;
                })}
            </div>
            <button className="btn" onClick={RemoveAll}>
                Clear Items
            </button>
        </div>
    );
};

const Person = ({id,  name, RemoveOne }) => {
    return (
        <div>
            <h3>{name}</h3>
            <button className="btn" onClick={() => RemoveOne(id)}>remove</button>
        </div>
    );
};

export default UseStateArray;
