import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Demo from "../auth/Demo";
import './HomePage.css';

const HomePage = () => {
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div className='homePageBody'>
            <h1 className='homeTitle'>Welcome to TwittR</h1>
            <h1 className='homeSubtitle'>The place where you can share anything</h1>
            {sessionUser ? <NavLink className='linkTweets' to='/tweets'>Start Tweeting</NavLink> :
                <Demo />}
            <img className='homeImage'
                 src='https://images.unsplash.com/photo-1627637820569-c95133be1c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80' />
            <h2 className='homeContact'>Contact me</h2>
            <div className='contactLinks'>
                <a href='https://github.com/OsvaldoSalomon'><BsGithub className='iconLink' /></a>
                <a href='https://www.linkedin.com/in/osvaldo-salomon-vazquez-0bb163230/'><BsLinkedin
                    className='iconLink' /></a>
            </div>
        </div>
    )
}

export default HomePage;