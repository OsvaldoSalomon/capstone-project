import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from "../../../store/comments";

const CreateComment = ({ tweetId }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);
    const [content, setContent] = useState('');

    const updateContent = (e) => setContent(e.target.value);

    const reset = () => setContent('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            userId: sessionUser.id,
            tweetId,
            content
        };

        console.log(payload);

        dispatch(addComment(payload))
        reset();
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
                        Reply
                    </button>
                </div>
            </form>
        </section>
    )
}

export default CreateComment;