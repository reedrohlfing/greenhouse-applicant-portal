import { Link } from 'react-router-dom';

const Login = () => {

    return ( 
        <nav className="login">
            <div className="login__left-background"></div>
            <div className="login__right-background">
                <div className="login__rightside">
                    <img className="login__logo" src="greenhouse-logo.png" alt="greenhouse"></img>
                    <div className="login__header-text">Find your applications.</div>
                    <input className="login__input" placeholder="Email" autoFocus="autofocus"></input>
                    <Link to="/verify">
                        <button className="login__next">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
            <img className="login__flower" src="greenhouse-flower.png" alt="flower"></img>
        </nav>
     );
}
 
export default Login;
