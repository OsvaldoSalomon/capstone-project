import { useDispatch } from "react-redux";
import { eraseComment } from "../../../store/comments";
import { getComments } from "../../../store/comments";

const DeleteComment = ({ commentId }) => {
    const dispatch = useDispatch();

    const onClicked = () => {
        dispatch(eraseComment(commentId));
        dispatch(getComments());
    }

    return <button onClick={onClicked}>Delete Comment</button>
}
export default DeleteComment;