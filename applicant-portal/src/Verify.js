import { Link } from 'react-router-dom';

const Verify = () => {

    return ( 
        <nav className="login">
            <div className="login__left-background"></div>
            <div className="login__right-background">
                <div className="login__rightside">
                    <img className="login__logo" src="greenhouse-logo.png" alt="greenhouse"></img>
                    <div className="login__header-text">First, verify your email.</div>
                    <div className="login__header-subtext">We've delivered a code to your inbox.</div>
                    <div className='login__verify'>
                        <input className="login__verifycode" placeholder="" autoFocus></input>
                        <div className='login__dash'>-</div>
                        <input className="login__verifycode" placeholder="" ></input>
                        <div className='login__dash'>-</div>
                        <input className="login__verifycode" placeholder="" ></input>
                        <div className='login__dash'>-</div>
                        <input className="login__verifycode" placeholder="" ></input>
                        <div className='login__dash'>-</div>
                        <input className="login__verifycode" placeholder="" ></input>
                        <div className='login__dash'>-</div>
                        <input className="login__verifycode" placeholder="" ></input>
                    </div>

                    <Link to="/loading">
                        <button className="login__next">
                            Done
                        </button>
                    </Link>
                </div>
            </div>
            <img className="login__flower" src="greenhouse-flower.png" alt="flower"></img>
        </nav>
     );
}
 
export default Verify;
