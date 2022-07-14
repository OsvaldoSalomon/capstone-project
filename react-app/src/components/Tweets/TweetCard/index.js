import { FaComment } from 'react-icons/fa';
import "./TweetCard.css";

const TweetCard = ({ tweet }) => {
    const image = tweet.images[0];

    return (
        <div className="tweet">
            <img className="tweetAuthorLogo" src={tweet.user.profilePic} alt={tweet.user.username} />
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
                    {image && <img className='tweet__image' src={image?.url} alt='image' />}
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
