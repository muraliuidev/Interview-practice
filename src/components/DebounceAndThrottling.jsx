import { useCallback, useState } from "react"

const ourDebounce = (fn, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const ourThrottling = (fn, delay) => {
    let timer;
    return (...args) => {
        if(!timer) {
            fn(...args)
            timer = setTimeout(() => {
                timer= null
            }, delay)
        }
    }
}
const DebounceAndThrottling = () => {
    const [debounceValue, setDebounceValue] = useState()
    const [throttlingValue, setThrottlingValue] = useState()

    const handleDebounceValue = (e) => {
        console.log(e.target.value)
        setDebounceValue(e.target.value)
    }
    const handleThrottlingValue = (e) => {
        console.log(e.target.value)
        setThrottlingValue(e.target.value)
    }

    const handleDebounce = useCallback(ourDebounce(handleDebounceValue, 300), [])
    const handleThrottling = useCallback(ourThrottling(handleThrottlingValue, 300), [])

    return (
        <div>
            <input onChange={handleDebounce} />
            <input onChange={handleThrottling} />
            <p>Debounce: {debounceValue}</p>
            <p>Throttling: {throttlingValue} </p>
        </div>
    )
}
export default DebounceAndThrottling