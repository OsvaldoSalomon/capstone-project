import "./TweetCard.css";

const TweetCard = ({ tweet }) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <div className="tweet">
            <img className="tweet__author-logo" src={tweet.user.profilePic} alt={tweet.user.username} />
            <div className='tweet__main'>
                <div className="tweet__header">
                    <div className="tweet__header">
                        {tweet?.user.firstName} {tweet?.user.lastName}
                    </div>
                    <div className="tweet__author-slug">
                        @{tweet?.user.username}
                    </div>
                </div>
                <div className="tweet__content">{tweet?.content}</div>
                <div className="tweetLikesCommentsNumber">
                    <div className="tweetBoxLC">Comments: {tweet?.comments}</div>
                </div>
            </div>
        </div>
    );
};

export default TweetCard;
