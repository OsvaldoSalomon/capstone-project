import "./TweetCard.css";

const TweetCard = ({ tweet }) => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return (
		<div className="tweetBody">
			<div className="tweetProfilePic">
				<img className="tweetImageProfile" src={tweet.user.profilePic} alt={tweet.user.username}/>
			</div>
			<div>
				<div className="tweetHeader">
					<h3 className="tweetAuthor">
						{tweet?.user.firstName} {tweet?.user.lastName}
					</h3>
					<h4 className="tweetUsername">@{tweet?.user.username}</h4>
					<p className="tweetDate">
						{new Date(tweet?.createdAt).toLocaleDateString(undefined, options)}
					</p>
				</div>
				<div className="tweetContent">{tweet?.content}</div>
				<div className="tweetLikesCommentsNumber">
					<div className="tweetBoxLC">Comments: {tweet?.comments}</div>
				</div>
			</div>
		</div>
	);
};

export default TweetCard;
