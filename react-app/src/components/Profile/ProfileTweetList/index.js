import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getTweets } from "../../../store/tweets";
import TweetCard from "../../Tweets/TweetCard";

const ProfileTweetList = ({ user }) => {
    const dispatch = useDispatch()
    const allTweets = useSelector(state => Object.values(state.tweets))
    const history = useHistory();

    const onClicked = (tweetId) => {
        history.push(`/tweets/${tweetId}`)
    }

    useEffect(() => {
        dispatch(getTweets());
    }, [dispatch])

    const filteredTweets = allTweets.filter(tweet => tweet.user.id == user.id)

    if (filteredTweets.length <= 0) {
        return <h1 className='noTweetsMessage'>No tweets were found for this user.</h1>
    } else {
        return (
            <div className='tweetList'>
                {filteredTweets.map((tweet) => {
                    return (
                        <div onClick={() => onClicked(tweet.id)}>
                            <TweetCard key={tweet.id} tweet={tweet} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProfileTweetList;