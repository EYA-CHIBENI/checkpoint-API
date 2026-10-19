import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .then((res) => setLoading(false))
            .catch((err) => console.log(err))
    }, [])
    return (
        loading ? <div className="loader"></div> :
            <div className="profile-page">
                <div className="cover-photo"></div>

                <div className="profile-card">
                    <div className="profile-avatar">
                        {user.name?.charAt(0)}
                    </div>

                    <div className="profile-header">
                        <h1>{user.name}</h1>
                        <p>@{user.username}</p>
                        <p>{user.company?.catchPhrase}</p>
                    </div>

                    <hr />

                    <div className="profile-content">
                        <section className="profile-section">
                            <h2>About</h2>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website}</p>
                        </section>

                        <section className="profile-section">
                            <h2>Address</h2>
                            <p>{user.address?.street}, {user.address?.suite}</p>
                            <p>{user.address?.city}, {user.address?.zipcode}</p>
                        </section>

                        <section className="profile-section">
                            <h2>Work</h2>
                            <p><strong>{user.company?.name}</strong></p>
                            <p>{user.company?.bs}</p>
                        </section>
                    </div>
                </div>
            </div>
    )
}
export default Profile;