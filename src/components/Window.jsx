import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth])

    const handleWindowSize = () => [
        setWindowSize([window.innerHeight, window.innerWidth])
    ]

    useEffect(() => {
        handleWindowSize()
        window.addEventListener("resize", handleWindowSize)

        return () => {
            window.removeEventListener("resize", handleWindowSize)
        }
    }, [])
    return windowSize
}

function Window () {
    const [height, width] = useWindowSize()
    return (
        <div>
            <h4>Height: {height}</h4>
            <h4>Width: {width}</h4>
        </div>
    )
}
export default Window