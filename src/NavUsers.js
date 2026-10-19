import { Link } from "react-router-dom";

const NavUsers = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">MyApp</h2>

            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavUsers;