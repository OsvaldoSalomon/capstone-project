import "./TweetCard.css";

const TweetCard = ({ tweet }) => {
    const image = tweet.images[0];

    return (
        <div className="tweet">
            <img className="tweet__author-logo" src={tweet.user.profilePic} alt={tweet.user.username} />
            <div className='tweet__main'>
                <div className="tweet__header">
                    <div className="tweet__author-name">
                        {tweet?.user.firstName} {tweet?.user.lastName}
                    </div>
                    <div className="tweet__author-slug">
                        @{tweet?.user.username}
                    </div>
                </div>
                <div className="tweet__content">
                    {tweet?.content}
                    {image && <img className='tweet__image' src={image?.url} alt='image' />}
                </div>
                <div className="tweetLikesCommentsNumber">
                    <div className="tweetBoxLC">Comments: {tweet?.comments}</div>
                </div>
            </div>
        </div>
    );
};

export default TweetCard;
