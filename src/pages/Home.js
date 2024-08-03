import { useState } from 'react'
import '../css/landing.css';
import Register from '../components/Register';



const Home = () => {
    
    const [showRegister, setShowRegister] = useState(false)
    
    const handleClick = () => {
        setShowRegister(prevVal => !prevVal)
    }

    const login = () => {
        return (
                <div className="landing__card login__card">
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className='landing__btn'>Submit</button>    
                </div>
        )
    }
    

    return (
        <div className="landing__container">
            {showRegister ? <Register /> : login()}
            <div className='landing__info'>
                {showRegister ? 
                    <p>Already registered? <button className='logreg_btn' onClick={handleClick}>Login</button></p>
                : 
                    <p>Not registered? <button className='logreg_btn' onClick={handleClick}>Register</button></p>
                }
            </div>
        </div>
    );
  };
  
  export default Home;