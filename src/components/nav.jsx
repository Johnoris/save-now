import { useState } from 'react';

const Nav = () => {
    const [ isActive, setIsActive ] = useState(false)
    return(
        <nav>
            <div className="nav-wrapper">
                <img src={require('../assets/logo.png')} alt="logo" />
                <img className='menu' src={require('../assets/menu.png')} alt="" />
                <div className='nav-links'>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <div>
                            <li><a href="#services">Services</a></li>
                            <img src={require('../assets/down-icon.png')} alt=""/>
                        </div>
                        <div>
                            <li><a href="#company">Company</a></li>
                            <img src={require('../assets/down-icon.png')} alt=""/>
                        </div>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    {!isActive &&<img className='menu' onClick={(e) => setIsActive(true)} src={require('../assets/menu.png')} alt="" />}
                    {isActive && <img className='menu' onClick={(e) => setIsActive(false)} src={require('../assets/close-icon.png')} alt="" />}
                    <div className="sign-up-btn">
                        <button className='login'>Log in</button>
                        <button className='signup'>Sign up</button>
                    </div>
                </div>
            </div>
            { isActive &&
                <div className='sm-nav-links'>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <div>
                            <li><a href="#services">Services</a></li>
                            <img src={require('../assets/down-icon.png')} alt=""/>
                        </div>
                        <div>
                            <li><a href="#company">Company</a></li>
                            <img src={require('../assets/down-icon.png')} alt=""/>
                        </div>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="sign-up-btn">
                        <button className='login'>Log in</button>
                        <button className='signup'>Sign up</button>
                    </div>
                </div>
            }
        </nav>
    )
}
export default Nav;