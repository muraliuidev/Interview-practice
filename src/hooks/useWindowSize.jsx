import { useEffect, useState } from "react";

function useWindowSize () {
    // Initialize state
    const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth])
    function handleSize () {
            setWindowSize([window.innerHeight, window.innerWidth])
        }
    useEffect(()=> {
        handleSize();
        window.addEventListener("resize", handleSize)
        return () => {
            window.removeEventListener("resize", handleSize)
        }
    },[])

    return windowSize;
}
export default useWindowSize;