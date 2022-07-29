import { FaComment } from 'react-icons/fa';
import "./TweetCard.css";

const TweetCard = ({ tweet }) => {
    const image = tweet.images[0];

    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }

    const brokenImage = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1644366251160-8791a554e064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }

    return (
        <div className="tweet">
            <img onError={addDefaultSrc} className="tweetAuthorLogo" src={tweet.user.profilePic} alt={tweet.user.username} />
            <div className='tweetMain'>
                <div className="tweetHeader">
                    <div className="tweetAuthorName">
                        {tweet?.user.firstName} {tweet?.user.lastName}
                    </div>
                    <div className="tweetAuthorSlug">
                        @{tweet?.user.username}
                    </div>
                </div>
                <div className="tweetContent">
                    {tweet?.content}
                    {image && <img onError={brokenImage} className='tweet__image' src={image?.url} alt='image' />}
                </div>
                <div className="tweetLikesCommentsNumber">
                    <div className="tweetBoxLC">
                        <FaComment className='commentIcon' /> {tweet?.comments}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetCard;
