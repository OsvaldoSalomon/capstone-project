import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CgTrash } from 'react-icons/cg';
import { eraseTweet, getTweets } from "../../../store/tweets";

const DeleteTweet = ({ tweetId }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onClicked = () => {
        dispatch(eraseTweet(tweetId));
        dispatch(getTweets());
        history.push('/tweets');
    }

    return <CgTrash className='iconDelete' onClick={onClicked} />
}

export default DeleteTweet;