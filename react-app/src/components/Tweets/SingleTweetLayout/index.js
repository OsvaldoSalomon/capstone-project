import ProfileCard from "../../Profile/ProfileCard";
import Hashtags from "../../Hashtags";
import SingleTweet from "../SingleTweet";
import { useParams } from "react-router-dom";
import './SingleTweetLayout.css';
import { useSelector } from "react-redux";

const SingleTweetLayout = () => {
    const { tweetId } = useParams();
    const tweet = useSelector(state => (state.tweets[tweetId]));
    const user = tweet?.user;
    console.log(user)

    return (
        <div className='layoutBody'>
            <ProfileCard user={user} className='profileLayout' />
            <div className='layoutCenter'>
                <SingleTweet />
            </div>
            <Hashtags className='usersLayout' />
        </div>
    )
}

export default SingleTweetLayout;
