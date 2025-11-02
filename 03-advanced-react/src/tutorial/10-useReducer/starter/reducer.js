import { CLEAR_ITEMS, RESET_ITEMS, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
    switch (action.type) {
        case CLEAR_ITEMS:
            return { ...state, people: [] };
        case RESET_ITEMS:
            return { ...state, people: data };
        case REMOVE_ITEM:
            return {
                ...state,
                people: state.people.filter(
                    (person) => person.id != action.payload.id
                ),
            };
        default:
            throw new Error(`No matching "${action.type}" - action type`);
    }
};

export default reducer;
