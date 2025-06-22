import { useEffect, useState } from "react"

function Search () {

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const fetchAPI = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await resp.json()
        setData(json)
    }
    useEffect(()=> {
        fetchAPI()
    }, [])

    // const filteredData = data.filter((user) =>
    // user.name.toLowerCase().includes(query.toLowerCase())
    // );

    return (
        <div>
            <input placeholder="Search" value={query} onChange={(e)=> setQuery(e.target.value) } />
            <table className="table__container">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            data.length>0 ? data.filter(data => data.name.toLowerCase().includes(query)).map((user)=> {
                                return(
                                    <tr key={user.id}>
                                        <td>{user?.id}</td>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.company?.name}</td>
                                    </tr>
                                )
                            })
                            :   <tr>
                                    <td>Data not Found</td>
                                </tr>
                        }
                    
                </tbody>
            </table>
            
        </div>
    )
}
export default Search;

