import './HomePage.css';
import Navbar from './Navbar';
// import Bg from "../assests/Bg.jpg";

const HomePage = () => {
    return (
        <div className='main container-fluid'>
            {/* <img className='bgimg' src={Bg} alt="background" /> */}
            <div>
                <Navbar/>
                <div>
                    <div className='heading-line'>
                        <h1 className='heading-main'>Be where the world is going.</h1>
                        <p className='heading-para'>Lets Share your every Moment !</p>
                    </div>
                    <div className='drop'>
                        <div className='content'>
                            <p>Get started</p>
                            <a className='btn btn-light' href="">Sign In</a>
                        </div>
                    </div>
                    <div className='no-acc'>
                        <p>Don't have an account ? <a className='btn btn-light' href="#">Sign Up</a> </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default HomePage;