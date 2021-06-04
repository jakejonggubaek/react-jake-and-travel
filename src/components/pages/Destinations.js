import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Destinations.scss';
import IntroSection from '../../components/IntroSection';
//import Cards from '../Cards';
import Video from '../../videos/destinations.mp4';
import picAmerica from '../../images/intro-america.jpg';
import picCarib from '../../images/intro-carib.jpg';
import picAsia from '../../images/intro-asia.jpg';
import picAfrica from '../../images/intro-africa.jpg';

function Destinations() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <IntroSection video={Video} heading='OUR DESTINATIONS' contents="Let's explore together" button='EXPLORE' path='#destinations'/>
            <section className="destinations" id="destinations">
                <div className="wrapper">
                    <div className="grid-container grid-container-1">
                        <img src={picAmerica} alt="rainbow mountain"></img>
                        <Link className="grid-container-desc" to="/america">
                            <div>
                                <h2>NORTH & SOUTH AMERICA</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="grid-container grid-container-2">
                        <img src={picCarib} alt="rainbow mountain"></img>
                        <Link className="grid-container-desc" to="/caribbean">
                            <div>
                                <h2>Caribbean</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="grid-container grid-container-3">
                        <img src={picAsia} alt="rainbow mountain"></img>
                        <Link className="grid-container-desc" to="/asia">
                            <div>
                                <h2>ASIA</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="grid-container grid-container-4">
                        <img src={picAfrica} alt="rainbow mountain"></img>
                        <Link className="grid-container-desc" to="/africa">
                            <div>
                                <h2>AFRICA</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="grid-container-5">
                        <p>A WANDER LIST</p>
                    </div>
                    <div className="grid-container-6">
                        <h2>WHERE TO GO THIS SUMMER BREAK</h2>
                        <p>All New Destination</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destinations;