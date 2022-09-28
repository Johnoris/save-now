const Footer = () => {
    return(
        <footer>
            <div className="section-1">
                <div>
                    <img src={require('../assets/logo.png')} alt="logo" />
                    <p>Save now, Invest now and enjoy Later</p>
                </div>
                <div className='product'>
                    <h3>Product</h3>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Savings</p>
                    <p>Investment</p>
                </div>
                <div className='company'>
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>News</p>
                    <p>Press</p>
                </div>
                <div lassName='resources'>
                    <h3>Resources</h3>
                    <p>Blog</p>
                    <p>Newsletter</p>
                    <p>FAQs</p>
                    <p>Help centre</p>
                </div>
                <div lassName='legal'>
                    <h3>Legal</h3>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="section-2">
                <h6>© 2022 Save Now. All rights reserved.</h6>
                <div className="footer-icons">
                    <img src={require('../assets/twitter.png')} alt=""/>
                    <img src={require('../assets/linkedin.png')} alt=""/>
                    <img src={require('../assets/facebook.png')} alt=""/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;