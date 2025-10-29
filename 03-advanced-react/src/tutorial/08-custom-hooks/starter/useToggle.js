import { useState } from "react";

const useToggle = (defVal) => {
    const [show, setShow] = useState(defVal);
    const toggle = () => {
        setShow(!show);
    };
    return [show, toggle];
};

export default useToggle;
