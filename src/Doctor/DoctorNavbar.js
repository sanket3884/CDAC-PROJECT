import { Link } from "react-router-dom";
import './navbar.css'

let DoctorNavbar = () => {
    return(
        // <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        // <div class="offcanvas-header">
        //     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //         <li className="nav-item">
        //             <Link to="home" class="nav-link active" aria-current="page">Home</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="set-sch" class="nav-link active" aria-current="page">Set Schedule</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="update-profile" class="nav-link active" aria-current="page">Update Profile</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="report" class="nav-link active" aria-current="page">View Report</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="view-appointment" class="nav-link active" aria-current="page">View Appointments</Link>
        //         </li>
        //     </ul>
            
        //     <form className="d-flex">
        //         <label className="me-2">Welcome</label>
        //         <button className="btn btn-outline-danger" type="button">Logout</button>
        //     </form>
        // </div>
        // </nav>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Offcanvas dark navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav  flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/patientHome">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/viewAppointment">View Appointment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/bookAppointment">Book Appointment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/patientUpadateProfile">Update Profile</a>
                                </li>
                            </ul>
                            <form class="d-flex mt-3" action="/signin">
                                <label>Welcome</label>
                                <button class="btn btn-success" type="submit" >Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default DoctorNavbar;