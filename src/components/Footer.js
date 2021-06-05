import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Footer.scss';
import Logo from '../images/logo.png'

function Footer() {
    return(
        <div className="footer-container" id="subscribe">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="Enter Your Email"/>
                        <Button buttonStyle="btn--outline" path='/'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <section className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Destinations</h2>
                        <Link to="/destinations">Our Destinations</Link>
                        <Link to="/americas">North & South America</Link>
                        <Link to="/africa">Africa</Link>
                        <Link to="/asia">Asia</Link>
                        <Link to="/caribbean">Caribbean</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/about-us">Our Value</Link>
                        <Link to="/about-us">Careers</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Home</h2>
                        <Link to="/">Jake and Travel</Link>
                        <Link to="/">Destinations for now</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Sign Up</h2>
                        <Link to="/sign-up">Sign Up</Link>
                        <Link to="/sign-up">Subscribe</Link>
                    </div>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <small className="website-rights">Jake and Travel 2021&copy;</small>
                    <div className="social-icons">
                        <a className="social-icon-link facebook" href='https://www.facebook.com/profile.php?id=100010067990533'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Facebook'>
                            Facebook
                        </a>
                        <a className="social-icon-link linked-in" href='https://www.linkedin.com/in/jakejonggubaek/'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='LinkedIn'>
                            LinkedIn
                        </a>
                        <a className="social-icon-link twitter" href='https://twitter.com/BaekJonggu'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='twitter'>
                            Twitter
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;