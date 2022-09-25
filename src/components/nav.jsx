const Nav = () => {
    return(
        <nav>
            <img src={require('../assets/logo.png')} alt="logo" />
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
                <div className="sign-up-btn">
                    <button className='login'>Log in</button>
                    <button className='signup'>Sign up</button>
                </div>
            </div>
        </nav>
    )
}
export default Nav;