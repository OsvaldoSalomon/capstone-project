import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from "../../../store/comments";
import './CreateComment.css';

const CreateComment = ({ tweetId }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);
    const [content, setContent] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const updateContent = (e) => setContent(e.target.value);

    const reset = () => setContent('');

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
            content
        };

        if (errors.length <= 0) {
            dispatch(addComment(payload))
            setHasSubmitted(false);
            reset();
        }
    };

    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }

    return (
        <section className="commentFormContainer">
            <img onError={addDefaultSrc} className="tweetFormAuthorLogo" src={sessionUser.profilePic} alt={sessionUser.username} />
            <form className="commentForm" onSubmit={handleSubmit}>
                <div className="errorsList">
                    {hasSubmitted && errors.map((error, idx) => (
                        <p className="errors" key={idx}>
                            {error}
                        </p>
                    ))}
                </div>
                <div className="commentInputContainer">
                    <input
                        className="commentInput"
                        type="text"
                        placeholder="Tweet your reply"
                        value={content}
                        onChange={updateContent}
                    />
                    <button className="commentButton" type="submit">
                        Reply
                    </button>
                </div>
            </form>
        </section>
    )
}

export default CreateComment;