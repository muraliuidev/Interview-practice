// Context.js
import { createContext, useState } from "react";
import ChildContext from "./ChildContext";

// Create and export context at top-level
export const NameContext = createContext();

function Context() {
    const [name] = useState("murali");

    return (
        <NameContext.Provider value={{ name }}>
            <ChildContext />
        </NameContext.Provider>
    );
}

export default Context;
