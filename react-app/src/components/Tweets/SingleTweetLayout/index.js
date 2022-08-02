import ProfileCard from "../../Profile/ProfileCard";
import ProfileSuggestion from "../../Profile/ProfileSuggestion";
import SingleTweet from "../SingleTweet";
import Profile from "../../Profile";
import { useParams } from "react-router-dom";
import './SingleTweetLayout.css';
import { useSelector } from "react-redux";

const SingleTweetLayout = () => {
    const { tweetId } = useParams();
    const tweet = useSelector(state => (state.tweets[tweetId]));
    const user = tweet?.user;
    // console.log(user)

    return (
        <div className='layoutBody'>
            {/*<div>*/}
            {/*    <ProfileCard user={user} className='profileLayout' />*/}
            {/*    <Profile />*/}
            {/*</div>*/}
            <ProfileCard user={user} className='profileLayout' />
            <div className='layoutCenter'>
                <SingleTweet />
            </div>
            <ProfileSuggestion className='usersLayout' />
        </div>
    )
}

export default SingleTweetLayout;
