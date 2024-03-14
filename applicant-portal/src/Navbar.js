import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();

    // Determine which tab should be selected based on the current route
    useEffect(() => {
        document.querySelectorAll('.navbar-tab-title').forEach(tab => {
            if (tab.getAttribute('href') === location.pathname) {
                tab.classList.add('selected');
            } else {
                tab.classList.remove('selected');
            }
        });
    }, [location]);

    return ( 
        <nav className="navbar">
            <div className="navbar__top">
                <Link className="greenhouse-logo-link" to="/">
                    <img className="nav__logo" src="g-icon-white.png" alt="navlogo"></img>
                </Link>
                <div className="navbar-element title">Applicant Portal</div>

                <div className="navbar-element navbar-end">
                    <img className="navbar-element help" src='help.png' alt='help'></img>
                    <div>applicant@email.com</div>
                </div>
            </div>

            <div className="navbar__tabs">
                <Link className="navbar-tab-title" to="/dashboard">Job dashboard</Link>
                <Link className="navbar-tab-title" to="/all-applications">All applications</Link>
                <Link className="navbar-tab-title" to="/archived">Archived</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
