import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateTweet } from "../../../../store/tweets";
import './EditTweet.css'

const EditTweet = ({ tweet, hideForm }) => {
    const dispatch = useDispatch();
    const { tweetId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const [contentInput, setContent] = useState(tweet?.content);
    const [errors, setErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            userId: sessionUser.id,
            tweetId: tweetId,
            content: contentInput,
        };

        await dispatch(updateTweet(payload))
        hideForm();
    };

    return (
        <div className='editTweetBody'>
            <section className="tweetEditFormContainer">
                <form className="tweetEditForm" onSubmit={handleSubmit}>
                    <ul className="errorsList">
                        {errors.map((error, idx) => (
                            <li className="errors" key={idx}>
                                {error}
                            </li>
                        ))}
                    </ul>
                    <div className="formContainer">
                        <input
                            className="tweetInput"
                            type="text"
                            placeholder="What's happening?"
                            value={contentInput}
                            onChange={updateContent}
                        />
                        <button className="tweetButton" type="submit">
                            Edit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default EditTweet;