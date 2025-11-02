import { useReducer } from "react";
import reducer from "./reducer";
import { data } from "../../../data";
import { CLEAR_ITEMS, RESET_ITEMS, REMOVE_ITEM } from "./actions";


const defaultState = {
    people: data,
    isLoading: false,
};

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removeItem = (id) => {};

    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button
                            onClick={() =>
                                dispatch({ type: REMOVE_ITEM, payload: { id } })
                            }
                        >
                            remove
                        </button>
                    </div>
                );
            })}
            {state.people.length > 0 ? (
                <button
                    className="btn"
                    style={{ marginTop: "2rem" }}
                    onClick={() => dispatch({ type: CLEAR_ITEMS })}
                >
                    clear items
                </button>
            ) : (
                <button
                    className="btn"
                    style={{ marginTop: "2rem" }}
                    onClick={() => dispatch({ type: RESET_ITEMS })}
                >
                    reset items
                </button>
            )}
        </div>
    );
};

export default ReducerBasics;
