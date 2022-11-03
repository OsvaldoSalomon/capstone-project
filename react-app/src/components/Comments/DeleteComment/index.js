import { useDispatch } from "react-redux";
import { CgTrash } from 'react-icons/cg';
import { eraseComment } from "../../../store/comments";
import { getComments } from "../../../store/comments";

const DeleteComment = ({ commentId, tweetId }) => {
    const dispatch = useDispatch();

    const onClicked = () => {
        dispatch(eraseComment(commentId));
        dispatch(getComments(tweetId));
    }

    return <CgTrash className='iconDelete' onClick={onClicked} />
}
export default DeleteComment;