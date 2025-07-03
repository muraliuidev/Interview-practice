import useMode from "../hooks/useMode"

function Mode () {
    const [mode, handleMode] = useMode(false)
    return (
        <div className={mode ? "light__mode" : "dark__mode"}>
            <button onClick={handleMode}>{mode ? "Light" : "Dark"} Mode</button>
        </div>
    )
}
export default Mode