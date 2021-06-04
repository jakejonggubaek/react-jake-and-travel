import { useEffect } from 'react';
import '../../App.scss';

export default function Caribbean() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="caribbean">
            <h1>Caribbean</h1>
        </div>

    )
}