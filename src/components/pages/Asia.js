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
            text: 'Find your zen in Bali.',
            label: 'relaxing',
            path: '/asia'
        },

        {
            src: ImageChina,
            text: 'Discover the Rich Flavors of Nanning, China.',
            label: 'culture',
            path: '/asia'
        },

        {
            src: ImageIndia,
            text: 'Memories of India will blaze bright long after you have left its shores',
            label: 'culture',
            path: '/asia'
        },

        {
            src: ImageJapan,
            text: 'A place where ancient traditions are fused with modern life.',
            label: 'culture',
            path: '/asia'
        },

        {
            src: ImageKorea,
            text: 'Witness history and neo-futurism all in one place.',
            label: 'culture',
            path: '/asia'
        },

        {
            src: ImageThai,
            text: 'Visit glittering temples and tropical beaches',
            label: 'culture',
            path: '/asia'
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