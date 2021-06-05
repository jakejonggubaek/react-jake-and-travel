import { useEffect } from 'react';
import IntroSection from '../../components/IntroSection';
import Cards from '../Cards';
import '../../App.scss';
import Video from '../../videos/africa.mp4';
import ImageEgypt from '../../images/africa/egypt.jpg';
import ImageKenya from '../../images/africa/kenya.jpg';
import ImageKilimanjaro from '../../images/africa/kilimanjaro.jpg';
import ImageMorocco from '../../images/africa/morocco.jpg';
import ImageSouthAfrica from '../../images/africa/southafrica.jpg';
import ImageVictoria from '../../images/africa/victoria.jpg';

export default function  Africa() {

    const image = [
        {
            src: ImageEgypt,
            text: 'The mighty Nile and magnificent monuments.',
            label: 'culture',
            path: '/africa'
        },

        {
            src: ImageKenya,
            text: 'Vast savannas peppered with immense herds of wildlife.',
            label: 'adventure',
            path: '/africa'
        },

        {
            src: ImageKilimanjaro,
            text: 'Visit Mt Kilimanjaro, the protected area that surrounds the mountain.',
            label: 'adventure',
            path: '/africa'
        },

        {
            src: ImageMorocco,
            text: 'A gateway to Africa and a country of dizzying diversity',
            label: 'culture',
            path: '/africa'
        },

        {
            src: ImageSouthAfrica,
            text: 'Black-maned lions framed against Kalahari dunes, a country of astounding diversity.',
            label: 'adventure',
            path: '/africa'
        },

        {
            src: ImageVictoria,
            text: 'One of Africa’s original blockbusters.',
            label: 'adventure',
            path: '/africa'
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <IntroSection video={Video} heading='Africa' contents="Let's explore together" button='FIND MORE' path='#africa-details' />
            <div className='africa-details' id='africa-details'>
                <Cards info={image} />
            </div>
        </>

    )
}