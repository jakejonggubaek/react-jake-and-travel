import { useEffect } from 'react';
import IntroSection from '../../components/IntroSection';
import Cards from '../Cards';
import Video from '../../videos/video-1.mp4';
import ImageBali from '../../images/home/bali.jpg';
import ImageBelize from '../../images/home/belize.jpg';
import ImageCaicos from '../../images/home/caicos.jpg';
import ImageEgypt from '../../images/home/egypt.jpg';
import ImageKorea from '../../images/home/korea.jpg';
import ImageKenya from '../../images/home/kenya.jpg';

function  Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const image = [
        {
            src: ImageBali,
            text: 'Find your zen in Bali.',
            label: 'relaxing',
            path: '/asia'
        }, 

        {
            src: ImageBelize,
            text: 'Explore the flavors and melodies of Belize.',
            label: 'adventure',
            path: '/america'
        },

        {
            src: ImageCaicos,
            text: 'Walk on the most world-famous stretch of coast.',
            label: 'luxury',
            path: '/caribbean'
        },

        {
            src: ImageEgypt,
            text: 'The mighty Nile and magnificent monuments.',
            label: 'culture',
            path: '/africa'
        },

        {
            src: ImageKorea,
            text: 'Witness history and neo-futurism all in one place.',
            label: 'culture',
            path: '/asia'
        },

        {
            src: ImageKenya,
            text: 'Vast savannas peppered with immense herds of wildlife.',
            label: 'adventure',
            path: '/africa'
        },
    ];

    return(
        <div id='home'>
            <IntroSection video={Video} heading='ADVENTURE AWAIT' contents='We travel not to escape life but for life not to escape us.' button='GET STARTED' path='#cards'/>
            <Cards info={image}/>
        </div>
    )
}

export default Home;