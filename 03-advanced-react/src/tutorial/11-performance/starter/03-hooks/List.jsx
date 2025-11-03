import Item from "./Person";
import { memo, useCallback, useState } from "react";
import { data } from "../../../../data";

const List = () => {
    const [people, setPeople] = useState(data);
    const removePerson = useCallback((id) => {
        setPeople(people.filter((person) => person.id != id));
    },[people]); // change nothing in my case "cause I refactored the code in a good way."
    return (
        <div>
            {people.map((person) => {
                return (
                    <Item
                        key={person.id}
                        {...person}
                        removePerson={removePerson}
                    />
                );
            })}
        </div>
    );
};
export default memo(List);
