// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeTweet } from "../../../store/tweets";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const LikeTweet = ({ tweet }) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	// const [liked, setLiked] = useState(false);
	const likes = tweet.likes;

	const likeClick = (e) => {
		e.preventDefault();
		const data = {
			userId: sessionUser.id,
			tweetId: tweet.id,
		};
		dispatch(likeTweet(data));
	};

	const checkLike = () => {
		for (let user of likes) {
			if (user.id == sessionUser.id) {
				// setLiked(true);
				return true;
			}
		}
		// setLiked(false);
		return false;
	};

	return (
		<div>
			<button onClick={likeClick}>
				{checkLike() ? (
					<IoMdHeart className="commentIcon" />
				) : (
					<IoMdHeartEmpty className="commentIcon" />
				)}
			</button>
		</div>
	);
};

export default LikeTweet;
