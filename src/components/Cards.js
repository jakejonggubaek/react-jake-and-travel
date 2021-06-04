import './Cards.scss';
import CardItem from './CardItem';


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