import './Cards.scss';
import CardItem from './CardItem';


function  Card({info}) {

    return(
        <div className='cards' id='cards'>
            <h1>CHECK OUT THESE EPIC DESTINATIONS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                        {
                            info.slice(0,3).map((item, index)=>{
                                return(
                                    <CardItem src={item.src} title={item.title} text={item.text} label={item.label} path={item.path} key={index} days={item.days} price={item.price}/>
                                )
                            })
                        }
                    </ul>
                    <ul className="cards__items">
                        {
                            info.slice(3, 6).map((item, index) => {
                                return (
                                    <CardItem src={item.src} title={item.title} text={item.text} label={item.label} path={item.path} key={index} days={item.days} price={item.price} />
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