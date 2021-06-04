import { useEffect } from 'react';

function  AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="about-us">
            <h1>About Us</h1>
        </div>
    )
}

export default AboutUs;