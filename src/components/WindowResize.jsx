import useWindowSize from "../hooks/useWindowSize";

function WindowResize() {
    const [height, width] = useWindowSize();
    return (
        <div style={{textAlign: "center"}}>
            <h3>Height: {height}</h3>
            <h3>Width: {width}</h3>
        </div>
    )
}
export default WindowResize;