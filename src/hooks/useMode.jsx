import { useState } from "react"

function useMode () {
    const [mode, setMode] = useState(false)
    const handleMode = () => {
        setMode(mode ? false : true)
    }
    return [mode, handleMode]
}
export default useMode