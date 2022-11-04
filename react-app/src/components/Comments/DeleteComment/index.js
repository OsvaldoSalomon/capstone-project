import { useDispatch } from "react-redux";
import { CgTrash } from 'react-icons/cg';
import { eraseComment } from "../../../store/comments";
import { getComments } from "../../../store/comments";

const DeleteComment = ({ commentId }) => {
    const dispatch = useDispatch();

    const onClicked = () => {
        dispatch(eraseComment(commentId));
        dispatch(getComments());
    }

    return <CgTrash className='iconDelete' onClick={onClicked} />
}
export default DeleteComment;