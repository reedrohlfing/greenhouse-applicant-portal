import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Loading = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // Set a timeout to change the redirect state after 5 seconds
        const timeoutId = setTimeout(() => {
            setRedirect(true);
        }, 5000);

        // Clean up the timeout to prevent memory leaks
        return () => clearTimeout(timeoutId);
    }, []);

    if (redirect) {
        return <Navigate to="/dashboard" />;
    }

    return ( 
        <nav className="login">
            <div className="login__left-background"></div>
            <div className="login__right-background">
                <div className="login__rightside">
                    <img className="login__logo" src="greenhouse-logo.png" alt="greenhouse"></img>
                    <div className="login__header-text">Gathering applications...</div>
                    <div className="loader"></div>

                    <Link to="/">
                        <button className="login__next">
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
            <img className="login__flower skew-animation" src="greenhouse-flower.png" alt="flower"></img>
        </nav>
     );
}
 
export default Loading;
