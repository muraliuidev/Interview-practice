import useSize from "../hooks/useSize";

function WindowResize() {
    const [height, width] = useSize();
    return(
        <div>
            <h2>Height: {height}</h2>
            <h2>Width: {width}</h2>
        </div>
    )
}
export default WindowResize;