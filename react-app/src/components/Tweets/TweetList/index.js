import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTweets } from '../../../store/tweets';
import TweetCard from '../TweetCard';
import './TweetList.css';

const TweetList = () => {
    const dispatch = useDispatch()
    const allTweets = useSelector(state => Object.values(state.tweets))
    // console.log(allTweets)

    useEffect(() => {
        dispatch(getTweets());
    }, [dispatch])

    return (
        <div>
            {allTweets.map((tweet) => {
                return (
                    <TweetCard tweet={tweet}/>
                    // <div>
                    //     <p>{tweet.user.firstName} {tweet.user.lastName}</p>
                    //     <img src={tweet.user.profilePic}/>
                    //     <p>{tweet.content}</p>
                    //     <p>Comments: {tweet.comments}</p>
                    //     {console.log(tweet.images[0].url)}
                    //     {tweet.images.map(image => {
                    //         console.log(image)
                    //         return <img src={image.url} alt={image} />
                    //     })}
                    //     <img src={tweet.images[0].url}/>
                    // </div>
                )
            })}
        </div>
    )
}

export default TweetList;