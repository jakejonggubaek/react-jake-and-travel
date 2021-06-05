import { useEffect } from 'react';
import IntroSection from '../../components/IntroSection';
import Cards from '../Cards';
import '../../App.scss';
import Video from '../../videos/asia.mp4';
import ImageBali from '../../images/asia/bali.jpg';
import ImageChina from '../../images/asia/china.jpg';
import ImageIndia from '../../images/asia/india.jpg';
import ImageJapan from '../../images/asia/japan.jpg';
import ImageKorea from '../../images/asia/korea.jpg';
import ImageThai from '../../images/asia/thailand.jpg';

export default function Asia() {

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
            src: ImageChina,
            title: 'Adventure in Southern China',
            text: 'Discover the Rich Flavors of Nanning, China.',
            label: 'culture',
            path: '/asia',
            days: '9 days',
            price: 1499
        },

        {
            src: ImageIndia,
            title: 'Best of India',
            text: 'Memories of India will blaze bright long after you have left its shores',
            label: 'culture',
            path: '/asia',
            days: '9 days',
            price: 1899
        },

        {
            src: ImageJapan,
            title: 'Mt Fuji, and Tokyo',
            text: 'A place where ancient traditions are fused with modern life.',
            label: 'culture',
            path: '/asia',
            days: '9 days',
            price: 1999
        },

        {
            src: ImageKorea,
            title: 'Best of Korea',
            text: 'Witness history and neo-futurism all in one place.',
            label: 'culture',
            path: '/asia',
            days: '7 days',
            price: 1599
        },

        {
            src: ImageThai,
            title: 'Thailand adventure',
            text: 'Visit glittering temples and tropical beaches',
            label: 'culture',
            path: '/asia',
            days: '11 days',
            price: 1699
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <IntroSection video={Video} heading='Asia' contents="Let's explore together" button='FIND MORE' path='#asia-details' />
            <div className='asia-details' id='asia-details'>
                <Cards info={image} />
            </div>
        </>
        
    )
}