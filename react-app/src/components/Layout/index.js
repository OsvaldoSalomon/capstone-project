import TweetList from "../Tweets/TweetList";
import ProfileCard from "../Profile/ProfileCard";
import TweetForm from "../Tweets/TweetForm/CreateTweet";
import Profile from "../Profile";
import ProfileSuggestion from "../Profile/ProfileSuggestion";
import { useSelector } from "react-redux";
import './Layout.css';

const Layout = () => {
    const user = useSelector(state => (state.session.user))

    return (
        <div className='layoutBody'>
            {/*<div>*/}
            {/*    <ProfileCard user={user} className='profileLayout' />*/}
            {/*    <Profile />*/}
            {/*</div>*/}
            <ProfileCard user={user} className='profileLayout' />
            <div className='layoutCenter'>
                <TweetForm />
                <TweetList />
            </div>
            <ProfileSuggestion className='usersLayout' />
        </div>
    )
}

export default Layout;