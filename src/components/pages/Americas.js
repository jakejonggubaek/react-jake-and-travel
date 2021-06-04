import {useEffect} from 'react';
import '../../App.scss';

export default function Americas() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="america">
            <h1>Americas</h1>
        </div>
        
    )
}