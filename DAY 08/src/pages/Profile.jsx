import {Link} from "react-router-dom";

export default function NotFound() {
    return(
        <div>
            <h2>404 Not Found</h2>
            <p>Sorry. The requested URL is not found.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}