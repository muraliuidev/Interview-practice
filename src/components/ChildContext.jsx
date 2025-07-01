// ChildContext.js
import { useContext } from "react";
import { NameContext } from "./Context"; // Import context from Context.js

function ChildContext() {
    const { name } = useContext(NameContext);

    return <div>{name}</div>;
}

export default ChildContext;
