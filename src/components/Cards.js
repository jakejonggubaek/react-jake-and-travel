import './Cards.scss';
import CardItem from './CardItem';
import Image2  from '../images/img-2.jpg'
import Image3 from '../images/img-3.jpg'
import Image4 from '../images/img-4.jpg'
import Image5 from '../images/img-5.jpg'
import Image6 from '../images/img-6.jpg'
import Image7 from '../images/img-7.jpg'

function  Card({info}) {

    return(
        <div className='cards' id='cards'>
            <h1>CHECK OUT THIS EPIC DESTINATIONS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                        {
                            info.slice(0,3).map((item, index)=>{
                                return(
                                    <CardItem src={item.src} text={item.text} label={item.label} path={item.path} key={index}/>
                                )
                            })
                        }
                    </ul>
                    <ul className="cards__items">
                        {
                            info.slice(3, 6).map((item, index) => {
                                return (
                                    <CardItem src={item.src} text={item.text} label={item.label} path={item.path} key={index} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;