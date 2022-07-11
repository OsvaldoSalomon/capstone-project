import TweetList from "../Tweets/TweetList";
import ProfileCard from "../Profile/ProfileCard";
import Hashtags from "../Hashtags";
import TweetForm from "../Tweets/TweetForm/CreateTweet";
import './Layout.css';

const Layout = () => {
    return (
        <div className='layoutBody'>
            <ProfileCard />
            <div>
                <TweetForm />
                <TweetList />
            </div>
            <Hashtags />
        </div>
    )
}

export default Layout;