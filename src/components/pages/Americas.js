import {useEffect} from 'react';
import IntroSection from '../../components/IntroSection';
import Cards from '../Cards';
import Video from '../../videos/americas.mp4';
import ImageCentralUS from '../../images/americas/central-US.jpg';
import ImagePeru from '../../images/americas/peru.jpg';
import ImageQuebec from '../../images/americas/quebec.jpg';
import ImageRio from '../../images/americas/rio.jpg';
import ImageWesternCanada from '../../images/americas/Western-Canada.jpg';
import ImageWesternUS from '../../images/americas/Western-US.jpg';
import '../../App.scss';

export default function Americas() {

    const image = [
        {
            src: ImageCentralUS,
            title: 'Adventure in Grand Canyon',
            text: 'The American Centrals best river trips.',
            label: 'adventure',
            path: '/america',
            days: '8 days',
            price: 1599
        },

        {
            src: ImagePeru,
            title: 'Machu Picchu and Cusco',
            text: 'The urban vanguard fuels innovation and nature bestows splendid diversity',
            label: 'culture/adventure',
            path: '/america',
            days: '8 days',
            price: 1299
        },

        {
            src: ImageQuebec,
            title: 'Best of Quebec',
            text: 'Island of francophone linguistic and cultural identity within the greater Canadian sea.',
            label: 'culture',
            path: '/america',
            days: '5 days',
            price: 1199
        },

        {
            src: ImageRio,
            title: 'Best of Brazil',
            text: 'Visit this country of powdery white-sand beaches, verdant rainforests and wild.',
            label: 'culture',
            path: '/america',
            days: '11 days',
            price: 2999
        },

        {
            src: ImageWesternCanada,
            title: 'Vancouver and Rockies',
            text: 'Witness one of the most beautiful mountain ranges on earth.',
            label: 'adventure',
            path: '/america',
            days: '9 days',
            price: 1999
        },

        {
            src: ImageWesternUS,
            title: 'Road trip along west coast ',
            text: 'From misty Seattle redwood forests to sun-kissed Southern California beaches',
            label: 'culture',
            path: '/america',
            days: '12 days',
            price: 2599
        },
    ];

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <IntroSection video={Video} heading='Americas' contents="Let's explore together" button='FIND MORE' path='#america-details'/>
            <div className='america-details' id='america-details'>
                <Cards info={image} />
            </div>
        </>      
    )
}