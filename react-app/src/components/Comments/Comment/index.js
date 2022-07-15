import { useState } from "react";
import { useSelector } from "react-redux";
import EditComment from "../CommentForm/EditComment";
import DeleteComment from "../DeleteComment";
import { FiEdit } from 'react-icons/fi';
import './Comment.css';

const Comment = ({ comment }) => {
    const sessionUser = useSelector((state) => state.session.user);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditButton = () => {
        setShowEditForm(!showEditForm);
    };

    return (
        <div className='comment'>
            <img className="commentProfileImage" src={comment.user.profilePic} />
            <div className='commentMain'>
                <div className='commentHeader'>
                    <div className='commentAuthorName'>
                        {comment?.user.firstName} {comment.user.lastName}
                    </div>
                    <div className="commentAuthorSlug">
                        @{comment?.user.username}
                    </div>
                </div>
                <div className='commentContent'>
                    {comment?.content}
                    {showEditForm && <EditComment commentId={comment?.id} hideForm={() => setShowEditForm(false)} />}
                    {sessionUser.id === comment?.user.id ? (
                        <div>
                            <FiEdit className='iconEdit' onClick={handleEditButton} />
                            <DeleteComment commentId={comment?.id} />
                        </div>
                    ) : <span></span>}
                </div>
            </div>
        </div>
    )
}

export default Comment;