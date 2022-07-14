import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { eraseTweet, getTweets } from "../../../store/tweets";

const DeleteTweet = ({ tweetId }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onClicked = () => {
        dispatch(eraseTweet(tweetId));
        dispatch(getTweets());
        history.push('/tweets');
    }

    return <button onClick={onClicked}>Delete Tweet</button>
}

export default DeleteTweet;