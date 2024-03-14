const Footer = () => {
    return ( 
        <nav className="footer">
            <div className="footer-quicklinks">
                
                <div className="quicklinks-section">
                    <div className="quicklinks-header">About</div>
                    <div className="quicklink">Company</div>
                    <div className="quicklink">Press & awards</div>
                    <div className="quicklink">Careers</div>
                    <div className="quicklink">Contact</div>
                </div>
                <div className="quicklinks-section">
                    <div className="quicklinks-header">Support</div>
                    <div className="quicklink">Learn Greenhouse</div>
                    <div className="quicklink">Customer support</div>
                    <div className="quicklink">Developer resources</div>
                </div>
                <div className="quicklinks-section">
                    <div className="quicklinks-header">Learn</div>
                    <div className="quicklink">How we store your data ↗</div>
                    <div className="quicklink">Explore companies using Greenhouse ↗</div>
                    <div className="quicklink">Industries we support ↗</div>
                </div>
            </div>
            <div className="footer-socials">
                <img alt="facebook" src="https://sharp.services.greenhouse.io/production/Facebook_200116_235458.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=38b1bf80b0469b5ee7a23e86aaa857c0b3dc2211419ad3c3cbca641ad934fbbb"></img>
                <img alt="linkedin" src="https://sharp.services.greenhouse.io/production/linkedin.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=34b956c8a836733a8ea153b0c863dc2ba794b55da68089e84562f4195d22367d"></img>
                <img alt="youtube" src="https://sharp.services.greenhouse.io/production/youtube.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=a3e493c512f90d2bcb6bd7f8629208b0adc0dcf405cc044f89bc8352fd39e62c"></img>
                <img alt="instagram" src="https://sharp.services.greenhouse.io/production/Instagram-1.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=3acd18e2ee5be82549a4e2b6742dcfb5280df0320e3465d7aafdea3bc9452ce4"></img>
                <img alt="tiktok" src="https://sharp.services.greenhouse.io/production/Tiktok-1.svg?auto=compress&fit=max&lossless=true&q=90&w=60&s=1fb8b0085c735fb13d1a642984104b53ea3cb043af796276d285b43b4c6873f0"></img>
            </div>

            <div className="footer-last-line">
                <div>
                <p className="footer-statement">
                        ©2024 Greenhouse Software, Inc.
                    </p>
                    <p className="footer-statement">
                        “Hire for what’s next”, “The/your all-together hiring platform” and “Talent Makers” are trademarks of Greenhouse Software.
                    </p> 
                </div>
                <div className="footer-additional-links">
                    <p>Cookie preferences</p>
                    <p>Privacy policy</p>
                    <p>Terms of service</p>
                </div>
            </div>
        </nav>
     );
}
 
export default Footer;
