import TweetList from "../Tweets/TweetList";
import ProfileCard from "../Profile/ProfileCard";
import Hashtags from "../Hashtags";
import TweetForm from "../Tweets/TweetForm/CreateTweet";
import { useSelector } from "react-redux";
import './Layout.css';

const Layout = () => {
    const user = useSelector(state => (state.session.user))

    return (
        <div className='layoutBody'>
            <ProfileCard user={user} className='profileLayout' />
            {/*<div className='spacingDiv'></div>*/}
            <div className='layoutCenter'>
                <TweetForm />
                <TweetList />
            </div>
            <Hashtags className='usersLayout' />
        </div>
    )
}

export default Layout;