import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { eraseComment } from "../../../store/comments";
import { getComments } from "../../../store/comments";

const DeleteComment = ({ commentId, tweetId }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onClicked = () => {
        dispatch(eraseComment(commentId));
        dispatch(getComments());
        // history.push(`/tweets/${tweetId}`);
    }

    return <button onClick={onClicked}>Delete Comment</button>
}

export default DeleteComment;
