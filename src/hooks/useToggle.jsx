import { useState } from "react";

function useToggle(){
    const[value, setValue]= useState(false)

    function toggle() {
        setValue(value ? false : true)
    }
    return [value, toggle]
}
export default useToggle