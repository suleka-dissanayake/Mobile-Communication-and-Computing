import {Link} from "react-router-dom";

export default function Home() {
    return(
        <div>
            <h2>Welcome to student portal</h2>
            <p>Learn about our student and dashboard</p>
            <Link to="/students">View Studnets</Link>
        </div>
    );
}