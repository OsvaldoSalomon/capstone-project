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

					{/* {sessionUser.id === tweet.author.id ? (
					<div className="buttonsEditDelete">
						<button
							className="deleteBtn"
							onClick={() => dispatch(deletetweet(tweet.id))}
						>
							<i className="fas fa-trash-alt"></i>
						</button>
						<button className="editBtn" onClick={handleEditButton}>
							<i className="fas fa-edit"></i>
						</button>
					</div>
				) : (
					<span></span>
				)} */}
				</div>
				<div className="tweetContent">{tweet?.content}</div>
				<div className="tweetLikesCommentsNumber">
					<div className="tweetBoxLC">{tweet?.likes}</div>
					{/*<div className="tweetBoxLC">{tweet?.comments.length()}</div>*/}
				</div>
			</div>
		</div>
	);
};

export default TweetCard;
