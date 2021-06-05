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
            title: 'Best of Bali',
            text: 'Find your zen in Bali.',
            label: 'relaxing',
            path: '/asia',
            days: '8 days',
            price: 1999
        }, 

        {
            src: ImageBelize,
            title: 'Best of Belize',
            text: 'Explore the flavors and melodies of Belize.',
            label: 'adventure',
            path: '/america',
            days: '6 days',
            price: 1599
        },

        {
            src: ImageCaicos,
            title: 'Honeymoon in Turks & Caicos',
            text: 'Walk on the most world-famous stretch of coast.',
            label: 'luxury',
            path: '/caribbean',
            days: '7 days',
            price: 3599
        },

        {
            src: ImageEgypt,
            title: 'Hightlight of Egypt',
            text: 'The mighty Nile and magnificent monuments.',
            label: 'culture',
            path: '/africa',
            days: '9 days',
            price: 2599
        },

        {
            src: ImageKorea,
            title: 'Best of Korea',
            text: 'Witness history and neo-futurism all in one place.',
            label: 'culture',
            path: '/asia',
            days: '9 days',
            price: 1599
        },

        {
            src: ImageKenya,
            title: 'Sarari Experience in Kenya',
            text: 'Vast savannas peppered with immense herds of wildlife.',
            label: 'adventure',
            path: '/africa',
            days: '11 days',
            price: 2599
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