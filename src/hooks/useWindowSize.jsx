import { useEffect, useState } from "react";

function useSize () {
    const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth])

    useEffect(()=> {
        function resizeWindow () {
            setWindowSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener("resize", resizeWindow);
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    },[])
    return windowSize;
}
export default useSize;