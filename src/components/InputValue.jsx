import { useState } from "react"

function InputValue () {
    const [inputValue, setInputValue] = useState("")
    const [entries, setEntries] = useState([])
    const [price, setPrice]= useState("")

    const handleAdd = () => {
        if(inputValue && price){
            const newEntry = {name: inputValue, price: price}
            setEntries([...entries, newEntry])
        }
    }
    console.log(entries)
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
            <input value={price} onChange={(e)=> setPrice(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul style={{listStyle: "none"}}>
            {
                entries ? entries.map((input)=> {
                    return (
                       <li>{input.name} - {input.price}</li> 
                    )
                })
                : <p>Data Not Found</p>
            }
            </ul>
        </div>
    )
}
export default InputValue