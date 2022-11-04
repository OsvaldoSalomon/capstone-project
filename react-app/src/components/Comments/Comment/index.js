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

    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }

    return (
        <div className='comment'>
            <img onError={addDefaultSrc} className="commentProfileImage" src={comment?.user.profilePic} />
            <div className='commentMain'>
                <div className='commentHeader'>
                    <div className='commentAuthorName'>
                        {comment?.user.firstName} {comment?.user.lastName}
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