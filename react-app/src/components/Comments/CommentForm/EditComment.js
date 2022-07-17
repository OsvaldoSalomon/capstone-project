import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from "../../../store/comments";
import { useParams } from "react-router-dom";

const EditComment = ({ commentId, hideForm }) => {
    const dispatch = useDispatch();
    const { tweetId } = useParams();
    const comment = useSelector(state => state.comments[commentId]);
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);
    const [content, setContent] = useState(comment?.content);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const updateContent = (e) => setContent(e.target.value);

    useEffect(() => {
        const errors = [];
        if (content.length == 0) errors.push('Please provide a content.')
        if (content.trim().length == 0) errors.push("You can't provide whitespaces.");
        if (content.length <= 3) errors.push('Comment must be greater than 3 characters.');
        if (content.length >= 100) errors.push('Comment must be less than 100 characters.');
        setErrors(errors);
    }, [content]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const payload = {
            userId: sessionUser.id,
            tweetId,
            content,
            commentId
        };

        if (errors.length <= 0) {
            dispatch(updateComment(payload))
            setHasSubmitted(false);
            hideForm();
        }

    };

    return (
        <section className="commentFormContainer">
            <form className="commentForm" onSubmit={handleSubmit}>
                <div className="errorsList">
                    {hasSubmitted && errors.map((error, idx) => (
                        <p className="errors" key={idx}>
                            {error}
                        </p>
                    ))}
                </div>
                <div className="commentEditInputContainer">
                    <input
                        className="commentEditInput"
                        type="text"
                        placeholder="Edit your reply"
                        value={content}
                        onChange={updateContent}
                    />
                    <button className="commentButton" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </section>
    )
}

export default EditComment;