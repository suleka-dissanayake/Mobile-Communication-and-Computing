import {Link, Outlet} from 'react-router-dom'

export default function DashboardLayout() {
    return(
        <div>
            <h2>Student Dashboard</h2>
            <p>Welcome to Student Dashboard</p>

            <nav>
                <Link to='/dashboard'>Dashboard Home</Link>
                {" | "}
                <Link to='/dashboard/profile'>Profile</Link>
                {" | "}
                <Link to='/dashboard/settings'>Settings</Link>
            </nav>

            <hr/>

            <Outlet />
        </div>
    );
}