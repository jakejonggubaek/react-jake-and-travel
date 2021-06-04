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
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/testimonial">Testimonials</Link>
                        <Link to="/testimonial">Careers</Link>
                        <Link to="/testimonial">Customer Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us2</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/testimonial">Testimonials</Link>
                        <Link to="/testimonial">Careers</Link>
                        <Link to="/testimonial">Customer Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us3</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/testimonial">Testimonials</Link>
                        <Link to="/testimonial">Careers</Link>
                        <Link to="/testimonial">Customer Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us4</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/testimonial">Testimonials</Link>
                        <Link to="/testimonial">Careers</Link>
                        <Link to="/testimonial">Customer Service</Link>
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
                    <small className="website-rights">Jake and Travel 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to='/'
                            target='_blank'
                            aria-label='Facebook'>
                            Facebook
                        </Link>
                        <Link className="social-icon-link linked-in" to='/'
                            target='_blank'
                            aria-label='LinkedIn'>
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;