import { useParams } from "react-router-dom";
import EditTweet from "../TweetForm/EditTweet";
import { useEffect } from "react";
import CreateComment from "../../Comments/CommentForm/CreateComment";
import DeleteTweet from "../DeleteTweet";
import EditComment from "../../Comments/CommentForm/EditComment";
import DeleteComment from "../../Comments/DeleteComment";
import { useSelector, useDispatch } from "react-redux";
import { getComments, eraseComment } from "../../../store/comments";

const SingleTweet = () => {
    const { tweetId } = useParams();
    const tweet = useSelector(state => state.tweets[tweetId]);
    const comments = useSelector(state => Object.values(state.comments));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    const tweetComments = comments.filter((comment) => comment.tweetId == tweetId);
    console.log(tweetComments)

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
                <div>
                    {tweetComments.map(comment => {
                        return (
                            <div>
                                <p>{comment.content} by {comment.user.username}</p>
                                <EditComment commentId={comment.id} />
                                <DeleteComment tweetId={tweetId} commentId={comment.id} />
                            </div>
                        )
                    })}
                </div>
                <CreateComment tweetId={tweetId} />

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