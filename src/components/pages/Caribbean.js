import { useEffect } from 'react';
import IntroSection from '../../components/IntroSection';
import Cards from '../Cards';
import '../../App.scss';
import Video from '../../videos/carib.mp4';
import ImageBarbados from '../../images/caribbean/barbados.jpg';
import ImageBelize from '../../images/caribbean/belize.jpg';
import ImageCaicos from '../../images/caribbean/caicos.jpg';
import ImageCancun from '../../images/caribbean/cancun.jpg';
import ImageCostarica from '../../images/caribbean/costarica.jpg';
import ImageCuba from '../../images/caribbean/cuba.jpg';

export default function Caribbean() {


    const image = [
        {
            src: ImageBarbados,
            text: 'Enjoy justifiably famed for its fantastic beaches',
            label: 'relaxing',
            path: '/caribbean'
        },

        {
            src: ImageBelize,
            text: 'Explore the flavors and melodies of Belize.',
            label: 'adventure',
            path: '/caribbean'
        },

        {
            src: ImageCaicos,
            text: 'Walk on the most world-famous stretch of coast.',
            label: 'luxury',
            path: '/caribbean'
        },

        {
            src: ImageCancun,
            text: 'Majestic Caribbean beaches and Maya culture.',
            label: 'relaxing',
            path: '/caribbean'
        },

        {
            src: ImageCostarica,
            text: 'hiking, biking or ziplining – your only limit is your return date.',
            label: 'adventure',
            path: '/caribbean'
        },

        {
            src: ImageCuba,
            text: 'A country of indefinable magic.',
            label: 'culture',
            path: '/caribbean'
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <IntroSection video={Video} heading='Caribbean' contents="Let's explore together" button='FIND MORE' path='#caribbean-details' />
            <div className='caribbean-details' id='caribbean-details'>
                <Cards info={image} />
            </div>
        </>

    )
}