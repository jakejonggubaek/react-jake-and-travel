import {Button} from './Button';
import './IntroSection.scss';

function IntroSection({video, heading, contents, button, path}) {
    return(
        <div className='intro-container'>
            <video src={video} autoPlay loop muted></video>
            <h1>{heading}</h1>
            <p>{contents}</p>
            <div className='intro-btns'>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large' path={path}>{button}</Button>
            </div>
        </div>
    )
}

export default IntroSection;