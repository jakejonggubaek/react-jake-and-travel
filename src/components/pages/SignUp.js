import { useEffect } from 'react';
import {Button} from '../Button';
import '../../App.scss';

export default function SignUp() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sign-up">
            <div className="sign-up-form-container">
                <h1>LOG IN</h1>
                <form>
                    <input type="text" placeholder="Enter your email"/>
                    <input type="password" placeholder="Enter your password" />
                    <Button buttonStyle='btn--outline' path='/sign-up'>SIGN UP</Button>
                </form>
            </div>
            
        </div>
        
    )
}