import { useEffect } from 'react';
import IntroSection from '../../components/IntroSection';
import './AboutUs.scss';
import Video from '../../videos/about.mp4';
import pic1 from '../../images/about-us/aboutus-1.jpg';
import pic2 from '../../images/about-us/aboutus-2.jpg';
import pic3 from '../../images/about-us/aboutus-3.jpg';
import pic4 from '../../images/about-us/aboutus-4.jpg';
import pic5 from '../../images/about-us/aboutus-5.jpg';
import pic6 from '../../images/about-us/aboutus-6.jpg';
import pic7 from '../../images/about-us/aboutus-7.jpg';
import pic8 from '../../images/about-us/aboutus-8.jpg';

function  AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <IntroSection video={Video} heading='About US' contents="Let's get to know each other!" button='OUR VALUES' path='#about-details' />
            
            <section class="about-details" id="about-details">
                <h2>The values that define our spirit</h2>
                <div class="wrapper">
                    
                    <div class="grid-container grid-container-1">
                        <img src={pic1} alt="machantiser smiling at his local shop in a market" />
                    </div>
                    <div class="grid-container grid-container-2">
                        <h3>Local Community</h3>
                    </div>
                    <div class="grid-container grid-container-3">
                        <img src={pic2} alt="local people gathering outside in Africa" />
                    </div>
                    <div class="grid-container grid-container-4">
                        <h3>Sustainability</h3>
                    </div>
                    <div class="grid-container grid-container-5">
                        <img src={pic3} alt="a baby turtle in human hands" />
                    </div>
                    <div class="grid-container grid-container-6">
                        <img src={pic4} alt="people holding hands each other looking at the ocean on the beach" />
                    </div>
                    <div class="grid-container grid-container-7">
                        <h2>OUR VALUES</h2>
                        <p>We believe a better world is possible with our values.</p>
                    </div>
                    <div class="grid-container grid-container-8">
                        <img src={pic5} alt="two giraff walking on a wild land" />
                    </div>
                    <div class="grid-container grid-container-9">
                        <img src={pic6} alt="a small bus parked on countryside" />
                    </div>
                    <div class="grid-container grid-container-10">
                        <h3>Adventure</h3>
                    </div>
                    <div class="grid-container grid-container-11">
                        <img src={pic7} alt="a person standing up on the edge of a cliff" />
                    </div>
                    <div class="grid-container grid-container-12">
                        <h3>Diversity</h3>
                    </div>
                    <div class="grid-container grid-container-13">
                        <img src={pic8} alt="people marching under a rainbow flag" />
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default AboutUs;