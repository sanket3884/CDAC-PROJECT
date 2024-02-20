import { Link } from "react-router-dom";
import './Navbar.css'

const AdminNavbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            
                    
                    {/* <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel"> */}
                       
                        <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add-doctor">Add Doctor</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/view-appointment">View Appointment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/update-doctor">Update Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/view-doctor">View Doctor</Link>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" action="/signin">
                                <label>Welcome</label>
                                <button className="btn btn-success" type="submit">Logout</button>
                            </form>
                        </div>
                    {/* </div> */}
                </div>
            
    )
}

export default AdminNavbar;
