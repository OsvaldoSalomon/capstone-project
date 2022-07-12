import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from "../../../store/comments";
import { useParams } from "react-router-dom";

const EditComment = ({ commentId }) => {
    const dispatch = useDispatch();
    const { tweetId } = useParams();
    const comment = useSelector(state => state.comments[commentId]);
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);
    const [content, setContent] = useState(comment?.content);

    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            userId: sessionUser.id,
            tweetId,
            content,
            commentId
        };

        console.log(payload);

        dispatch(updateComment(payload))
    };

    return (
        <section className="commentFormContainer">
            <form className="commentForm" onSubmit={handleSubmit}>
                <ul className="errorsList">
                    {errors.map((error, idx) => (
                        <li className="errors" key={idx}>
                            {error}
                        </li>
                    ))}
                </ul>
                <div className="formContainer">
                    <input
                        className="commentInput"
                        type="text"
                        placeholder="Add a comment"
                        value={content}
                        onChange={updateContent}
                    />
                    <button className="commentButton" type="submit">
                        Edit
                    </button>
                </div>
            </form>
        </section>
    )
}

export default EditComment;