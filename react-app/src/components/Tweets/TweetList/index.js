import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTweets } from '../../../store/tweets';
import { useHistory } from "react-router-dom";
import TweetCard from '../TweetCard';
import './TweetList.css';

const TweetList = () => {
    const dispatch = useDispatch()
    const allTweets = useSelector(state => Object.values(state.tweets))
    const history = useHistory();

    const onClicked = (tweetId) => {
        history.push(`/tweets/${tweetId}`)
    }

    useEffect(() => {
        dispatch(getTweets());
    }, [dispatch])

    if (!allTweets) {
        return <h1>No tweets are being found.</h1>
    } else {
        return (
            <div className='tweetList'>
                {allTweets.map((tweet) => {
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

export default TweetList;