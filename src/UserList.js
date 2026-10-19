import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserList = () => {
    const[loading,setLoading] = useState(true)
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .then((res)=> setLoading(false))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
{
   loading ? <div className="loader"></div> : users.map((el,i,t)=> <Link key={el.id} to={`/profile/${el.id}`}><h1>{el.name}</h1></Link> )
}
        </div>
    )
}
export default UserList;