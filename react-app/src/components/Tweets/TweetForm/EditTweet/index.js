import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateTweet } from "../../../../store/tweets";
import './EditTweet.css'

const EditTweet = ({ tweet, hideForm }) => {
    const dispatch = useDispatch();
    const { tweetId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const [content, setContent] = useState(tweet?.content);
    const [image, setImage] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value);

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const removeImage = () => {
        setImage(null);
    }

    useEffect(() => {
        const errors = [];
        if (content.length == 0) errors.push('Please provide a content.')
        if (content.trim().length == 0) errors.push("You can't provide whitespaces.");
        if (content.length <= 3) errors.push('Tweet content must be greater than 3 characters.');
        if (content.length >= 250) errors.push('Tweet content must be less than 250 characters.');
        setErrors(errors);
    }, [content]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const payload = {
            userId: sessionUser.id,
            tweetId: tweetId,
            content,
        };

        if (errors.length <= 0) {
            await dispatch(updateTweet(payload))
            hideForm();
        }
    };

    return (
        <div className='editTweetBody'>
            <section className="tweetEditFormContainer">
                <form className="tweetEditForm" onSubmit={handleSubmit}>
                    <div className="errorsList">
                        {hasSubmitted && errors.map((error, idx) => (
                            <p className="errors" key={idx}>
                                {error}
                            </p>
                        ))}
                    </div>
                    <div className="formContainer">
                        <input
                            className="tweetEditInput"
                            type="text"
                            placeholder="What's happening?"
                            value={content}
                            onChange={updateContent}
                        />
                        <button className="tweetButton" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default EditTweet;