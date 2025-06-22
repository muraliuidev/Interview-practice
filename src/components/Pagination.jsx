import { useEffect, useState } from "react"

function Pagination () {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=200')
        const json = await data.json()
        setProducts(json.products)
        
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div>
            <h1>Pagination</h1>
            <div className="container">
                {
                products ? 
                products.map((p)=> {
                    return(
                            <div className="image-container" key={p.id}>
                                <img src={p.thumbnail} alt={p.title} />
                                <p>{p.title}</p>
                            </div> 
                    )
                    }) 
                    : <h2>Data Not Found</h2>
                }
            </div>
        </div>
    )
}
export default Pagination