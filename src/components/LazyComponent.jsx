import { lazy, Suspense, useState } from "react"
import LazyLoading from "./LazyLoading";

function LazyComponent () {
    const LazyLoading = lazy(()=> import('./LazyLoading'))
    const [show, setShow] = useState(false)
    return(
        <div>
            <h1>Lazy Loading Example</h1>
            <button onClick={()=> setShow(true)}>Loading</button>
            {
                show && (
                    <Suspense fallback={<p>Loading...</p>}>
                        <LazyLoading />
                    </Suspense>
                )
            }
        </div>
        
    )
}
export default LazyComponent