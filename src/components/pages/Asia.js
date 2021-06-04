import { useEffect } from 'react';
import '../../App.scss';

export default function Asia() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="asia">
            <h1>Asia</h1>
        </div>
        
    )
}