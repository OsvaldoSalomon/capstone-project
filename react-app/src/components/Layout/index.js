import TweetList from "../Tweets/TweetList";
import ProfileCard from "../Profile/ProfileCard";
import Hashtags from "../Hashtags";
import './Layout.css';

const Layout = () => {
    return (
        <div className='layoutBody'>
            <ProfileCard />
            <TweetList />
            <Hashtags />
        </div>
    )
}

export default Layout;