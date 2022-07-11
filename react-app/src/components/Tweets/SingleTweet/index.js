import { useParams } from "react-router-dom";
import EditTweet from "../TweetForm/EditTweet";
import DeleteTweet from "../DeleteTweet";
import { useSelector } from "react-redux";

const SingleTweet = () => {
    const { tweetId } = useParams();
    const tweet = useSelector(state => state.tweets[tweetId]);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return (
        <div>
            <EditTweet />
            <DeleteTweet tweetId={tweetId} />
            <div className="singleTweetHeader">
                <h3 className="tweetAuthor">
                    {tweet?.user.firstName} {tweet?.user.lastName}
                </h3>
                <h4 className="tweetUsername">@{tweet?.user.username}</h4>
                <p className="tweetDate">
                    {new Date(tweet?.createdAt).toLocaleDateString(undefined, options)}
                </p>
                <p>{tweet?.content}</p>
                {tweet?.comments.map(comment => {
                    return (
                        <div>
                            <p>{comment?.content}</p>
                        </div>
                    )
                })}

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
        </div>
    )

}

export default SingleTweet;