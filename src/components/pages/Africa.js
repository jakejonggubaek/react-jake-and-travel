import { useEffect } from 'react';
import '../../App.scss';

export default function  Africa() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="africa">
            <h1>Africa</h1>
        </div>
    )
}