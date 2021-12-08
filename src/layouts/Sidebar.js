import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="col-md-3">
            <div className="fixed-custom">
                <NavLink to="/"><p className="my-2 fs-4 ms-5"><i class="bi bi-twitter me-3"></i></p></NavLink>
                <NavLink to="/"><p className="my-4 fs-4 ms-5"><i class="bi bi-house me-3"></i>Home</p></NavLink>
                <NavLink to="/explore"><p className="my-4 fs-4 ms-5"><i class="bi bi-hash me-3"></i>Explore</p></NavLink>
                <NavLink to="/notifications"><p className="my-4 fs-4 ms-5"><i class="bi bi-bell me-3"></i>Notifications</p></NavLink>
                <NavLink to="/message"><p className="my-4 fs-4 ms-5"><i class="bi bi-envelope me-3"></i>Message</p></NavLink>
                <NavLink to="/bookmarks"><p className="my-4 fs-4 ms-5"><i class="bi bi-bookmark me-3"></i>Bookmarks</p></NavLink>
                <NavLink to="/lists"><p className="my-4 fs-4 ms-5"><i class="bi bi-card-text me-3"></i>Lists</p></NavLink>
                <NavLink to="/profile"><p className="my-4 fs-4 ms-5"><i class="bi bi-person me-3"></i>Profile</p></NavLink>
                <NavLink to="/more"><p className="my-4 fs-4 ms-5"><i class="bi bi-three-dots me-3"></i>More</p></NavLink>
                <Link to="/create" className="mb-4 fs-5 ms-5 fw-bold py-2 px-5 btn btn-primary rounded-pill">Tweet</Link>
            </div>
        </div>
    );
}
 
export default Sidebar;