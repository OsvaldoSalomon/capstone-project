import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../../store/comments";
import { getTweets, likeUnlikeTweet } from "../../../store/tweets";
import { FiEdit } from 'react-icons/fi';
import DeleteTweet from "../DeleteTweet";
import EditTweet from "../TweetForm/EditTweet";
import CreateComment from "../../Comments/CommentForm/CreateComment";
import Comment from "../../Comments/Comment";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import './SingleTweet.css';

const SingleTweet = () => {
    const dispatch = useDispatch();
    const { tweetId } = useParams();
    const [showEditForm, setShowEditForm] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    const comments = useSelector(state => Object.values(state.comments));
    const tweets = useSelector(state => Object.values(state.tweets));

    const currentTweetFiltered = tweets.filter(current => current?.id == tweetId);
    const currentTweet = currentTweetFiltered[0];
    const image = currentTweet?.images[0];

    useEffect(() => {
        dispatch(getTweets());
        dispatch(getComments(tweetId));
    }, [dispatch])

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const handleEditButton = () => {
        setShowEditForm(!showEditForm);
    };

    const liked = () => {
        for (let like of currentTweet.likes) {
            if (like.id == sessionUser.id) {
                return true;
            }
        }
        return false;
    }

    const onClickLike = async () => {
        const data = {
            userId: sessionUser.id,
            tweetId
        }
        await dispatch(likeUnlikeTweet(data))
    }

    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }

    const brokenImage = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1644366251160-8791a554e064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }

    if (!currentTweet) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div className='singleTweetBody'>
                {(sessionUser.id === currentTweet?.user.id) || sessionUser.username === "administrator" ? (
                    <div className='singleTweetEdit'>
                        <FiEdit className='iconEdit' onClick={handleEditButton} />
                        <DeleteTweet tweetId={tweetId} />
                    </div>
                ) : <span></span>}
                <div>
                    <div className="singleTweetHeader">
                        <img onError={addDefaultSrc} className="tweetProfileImage" src={currentTweet.user.profilePic}
                             alt={currentTweet.user.username} />
                        <h3 className="tweetAuthor">
                            {currentTweet?.user.firstName} {currentTweet?.user.lastName}
                        </h3>
                        <h4 className="tweetUsername">@{currentTweet?.user.username}</h4>
                    </div>
                    <h2>{currentTweet?.content}</h2>
                    {showEditForm && <EditTweet tweet={currentTweet} hideForm={() => setShowEditForm(false)} />}
                    {image && <img className='tweetImage' onError={brokenImage} src={image?.url} alt='image' />}
                    <div></div>
                    <p className="tweetDate">
                        {/*{timeUpdatedAt(currentTweet?.updatedAt)}*/}
                        {new Date(currentTweet?.updatedAt).toLocaleDateString(undefined, options)}
                    </p>
                    <div className="likeCommentsContainer">
                        <div>
                            {liked() ?
                                <div className='likeIconNumber'>
                                    <IoMdHeart onClick={onClickLike}
                                               className="commentIcon" /> {currentTweet?.likes.length}
                                </div> :
                                <div className='likeIconNumber'>
                                    <IoMdHeartEmpty onClick={onClickLike}
                                                    className="commentIcon" /> {currentTweet?.likes.length}
                                </div>
                            }
                        </div>
                        {currentTweet?.comments === 1 ? <p>{currentTweet?.comments} comment</p> :
                            <p>{currentTweet?.comments} comments</p>}
                    </div>
                    <hr />

                    <div>
                        <CreateComment tweetId={tweetId} />
                        <hr />
                        {comments.map(comment => {
                            return (
                                <Comment key={comment.id} comment={comment} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default SingleTweet;