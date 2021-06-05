import {useState, useEffect} from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import logo from '../images/logo-main.png';
import './Navbar.scss';
import {Button} from './Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item dropdown'>
                            <div className='nav-links' >
                                <Link to='/destinations' onClick={closeMobileMenu} className="nav-links dropbtn">Destinations</Link>
                                <div className="dropdown-content">
                                    <Link to='/destinations' className='dropdown-submenu'>Destinations</Link>
                                    <Link to='/america' className='dropdown-submenu'>Americas</Link>
                                    <Link to='/africa' className='dropdown-submenu'>Africa</Link>
                                    <Link to='/asia' className='dropdown-submenu'>Asia</Link>
                                    <Link to='/caribbean' className='dropdown-submenu'>Caribbean</Link>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>About us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#subscribe' className='nav-links' onClick={closeMobileMenu}>Subscribe</Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' path='/sign-up'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;