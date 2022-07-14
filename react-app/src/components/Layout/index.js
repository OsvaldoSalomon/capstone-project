import TweetList from "../Tweets/TweetList";
import ProfileCard from "../Profile/ProfileCard";
import Hashtags from "../Hashtags";
import TweetForm from "../Tweets/TweetForm/CreateTweet";
import './Layout.css';

const Layout = () => {
    return (
        <div className='layoutBody'>
            <ProfileCard className='profileLayout' />
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