import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../../store/comments";
import { getTweets, eraseTweet } from "../../../store/tweets";
import DeleteComment from "../../Comments/DeleteComment";
import DeleteTweet from "../DeleteTweet";
import EditTweet from "../TweetForm/EditTweet";
import CreateComment from "../../Comments/CommentForm/CreateComment";
import EditComment from "../../Comments/CommentForm/EditComment";
import './SingleTweet.css';

const SingleTweet = () => {
    const dispatch = useDispatch();
    const { tweetId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const comments = useSelector(state => Object.values(state.comments));
    const tweets = useSelector(state => Object.values(state.tweets));

    const tweetComments = comments.filter((comment) => comment.tweetId == tweetId);
    const currentTweetFiltered = tweets.filter(current => current?.id == tweetId);
    const currentTweet = currentTweetFiltered[0];
    const image = currentTweet?.images[0];

    useEffect(() => {
        dispatch(getTweets());
        dispatch(getComments());
    }, [dispatch])

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <div className='singleTweetBody'>
            {sessionUser.id === currentTweet?.user.id ? (
                <div>
                    <EditTweet tweet={currentTweet} />
                    <DeleteTweet tweetId={tweetId} />
                    {/*<button onClick={() => dispatch(eraseTweet(tweetId))}>Delete Tweet</button>*/}
                </div>
            ) : <span></span>}
            <div className="singleTweetHeader">
                <h3 className="tweetAuthor">
                    {currentTweet?.user.firstName} {currentTweet?.user.lastName}
                </h3>
                <h4 className="tweetUsername">@{currentTweet?.user.username}</h4>
                <p className="tweetDate">
                    {new Date(currentTweet?.createdAt).toLocaleDateString(undefined, options)}
                </p>
                <p>{currentTweet?.content}</p>
                {image && <img className='tweetImage' src={image?.url} alt='image' />}
                <div>
                    {tweetComments.map(comment => {
                        return (
                            <div>
                                <p>{comment.content} by {comment.user.username}</p>
                                {sessionUser.id === comment.user.id ? (
                                    <div>
                                        <EditComment commentId={comment.id} />
                                        <DeleteComment commentId={comment.id} />
                                    </div>
                                ) : <span></span>}

                            </div>
                        )
                    })}
                </div>
                <CreateComment tweetId={tweetId} />
            </div>
        </div>
    )

}

export default SingleTweet;