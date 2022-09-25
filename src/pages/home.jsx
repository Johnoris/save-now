import Footer from "../components/footer";
import Nav from "../components/nav";

const Home = () => {
    return(
        <div className="home">
            <Nav/>
            <section className="top-section">
                <div className="top-section_child">
                    <div className="text-wrapper">
                        <h1>Budget and understand your finances by <a>saving</a> your money</h1>
                        <h4>Save with us, earn and gain financial freedom. We help you keep your funds to give you a happy ending.</h4>
                        <button>
                        Start saving
                        <img src={require('../assets/next-icon.png')} alt=""/>
                        </button>
                    </div>
                    <div>
                    <img src={require('../assets/top-section-img.png')} alt=""/>
                    </div>
                </div>
                <div className="about">
                    <h3>100k+ Users</h3>
                    <h3>80k+ Awards</h3>
                    <h3>5k+ partners</h3>
                </div>
            </section>
            <section className="invest">
                <h3>Save, Invest now and Enjoy later!</h3>
                <div className="invest-card">
                    <img className="card-img" src={require('../assets/savings-icon.png')} alt=""/>
                    <h4>Savings</h4>
                    <p>Save with us today by choosing the savings plan that suits you</p>
                    <button>
                        Learn more
                        <img src={require('../assets/more-icon.png')} alt=""/>  
                    </button>
                </div>
                <div className="invest-card">
                    <img className="card-img" src={require('../assets/invest-icon.png')} alt=""/>
                    <h4>Investments</h4>
                    <p>Put your money to work, Invest now and enjoy later.</p>
                    <button>
                        Learn more
                        <img src={require('../assets/more-icon.png')} alt=""/>  
                    </button>
                </div>
            </section>
            <section className="about-us">
                <h2>We offer the best services and these are the reasons why you should choose us</h2>
                <div className="about-card-wrapper">
                    <AboutCard src={require('../assets/invest-icon.png')} title="Savings Plan" text="We have different savings plan just for you. You have access to choose as many plans that works for you."/>
                    <AboutCard src={require('../assets/safe-icon.png')} title="Safe and Reliable" text="We are safe, trusted and reliable. You can always count on us as you getting your money is guaranteed."/>
                    <AboutCard src={require('../assets/interest-icon.png')} title="Interest Rate" text="We offer a 10% interest on your savings. Your money is safe and is working for you."/>
                    <AboutCard src={require('../assets/security-icon.png')} title="Security" text="Your information is safe with us as they are encrypted and protected from fraud."/>
                </div>
            </section>
            <section className="start">
                <div className="how-to">
                    <img src={require('../assets/start-img.png')} alt=""/>
                    <div>
                        <h3>How to start saving with us in 3 steps</h3>
                        <div className="steps">
                            <div className="no"><h4>1</h4></div>
                            <div>
                                <h5>Sign up</h5>
                                <p>Sign up by using your email address and adding a password</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="no"><h4>2</h4></div>
                            <div>
                                <h5>Choose a saving plan</h5>
                                <p>Pick a saving plan that works best for you</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="no"><h4>3</h4></div>
                            <div>
                                <h5>Save</h5>
                                <p>Save your money using your bank account, debit card, USSD and be relaxed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="investment-plan">
                    <div className="investment-plan-text">
                        <h3>Investment Plan</h3>
                        <p>Check out our investment plan today. Build wealth and put your money to work by investing with us.</p>
                        <button>
                            Read more
                            <img src={require('../assets/next-icon.png')} alt=""/>  
                        </button>
                    </div>
                    <img src={require('../assets/plan-img.png')} alt=""/>
                </div>
            </section>
            <section className="download">
                <h2>Download our app today and start saving and investing easily</h2>
                <div className="download-links">
                    <img src={require('../assets/play-store.png')} alt=""/>
                    <img src={require('../assets/app-store.png')} alt=""/>
                </div>
            </section>
            <section className="customers">
                <h3>Our Happy Customers</h3>
                <div className="customer-card-wrapper">
                    <CustomerCard src={require('../assets/customer1.png')} name="Adeyemi Olaide" location="Lagos, Nigeria" text="I have always wanted to save my money but I was always scared. Ever since I started using save now, I became happier because it is trusted and reliable"/>
                    <CustomerCard src={require('../assets/customer2.png')} name="Adeyemi Olaide" location="Lagos, Nigeria" text="I tend to spend money lavishly and wanted to discipline myself, I found save now and my story has changed. Save Now is safe and easy to use."/>
                </div>
                <div className="current-view">
                    <div style={{backgroundColor : '#183F8B'}}></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Home;

const AboutCard = (props) => {
    return(
        <div className="invest-card">
            <img className="card-img" src={props.src} alt=""/>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}
const CustomerCard = (props) => {
    return(
        <div className="customer-card">
            <div className="customer-card-top">
                <img src={props.src} alt=""/>
                <div>
                    <h4>{props.name}</h4>
                    <h5>{props.location}</h5>
                </div>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}