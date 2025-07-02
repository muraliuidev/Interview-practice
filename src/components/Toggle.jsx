import useToggle from "../hooks/useToggle"

function Toggle() {
    const [value, toggle] = useToggle(false)
    return(
        <div>
            <button className="toggle__button" onClick={toggle}>
                { value ? "On" : "Off"}
            </button>
        </div>
    )
}
export default Toggle