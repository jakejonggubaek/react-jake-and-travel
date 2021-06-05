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
            text: 'The American Centrals best river trips.',
            label: 'adventure',
            path: '/america'
        },

        {
            src: ImagePeru,
            text: 'The urban vanguard fuels innovation and nature bestows splendid diversity',
            label: 'culture/adventure',
            path: '/america'
        },

        {
            src: ImageQuebec,
            text: 'Island of francophone linguistic and cultural identity within the greater Canadian sea.',
            label: 'culture',
            path: '/america'
        },

        {
            src: ImageRio,
            text: 'Visit this country of powdery white-sand beaches, verdant rainforests and wild.',
            label: 'culture',
            path: '/america'
        },

        {
            src: ImageWesternCanada,
            text: 'Witness one of the most beautiful mountain ranges on earth.',
            label: 'adventure',
            path: '/america'
        },

        {
            src: ImageWesternUS,
            text: 'From misty Seattle redwood forests to sun-kissed Southern California beaches',
            label: 'culture',
            path: '/america'
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