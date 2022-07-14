import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet, uploadImage } from "../../../../store/tweets";
import './CreateTweet.css';

const TweetForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value);
    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    const reset = () => setContent('');

    useEffect(() => {
        const errors = [];
        if (content.length == 0) errors.push('Please provide a content')
        if (content.length <= 4) errors.push('Tweet content must be greater than 3');
        setErrors(errors);
    }, [content]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const payloadContent = {
            userId: sessionUser.id,
            content,
        };

        if (errors.length <= 0) {
            const newTweet = await dispatch(addTweet(payloadContent));
            const payloadImage = {
                image,
                tweetId: newTweet.id
            }
            await dispatch(uploadImage(payloadImage))
            if (newTweet) {
                setErrors(newTweet);
            }
            reset();
        }
    };

    return (
        <section className="tweetFormContainer">
            <form className="tweetForm" onSubmit={handleSubmit}>
                <div className="errorsList">
                    {hasSubmitted && errors.map((error, idx) => (
                        <p className="errors" key={idx}>
                            {error}
                        </p>
                    ))}
                </div>
                <div className="formContainer">
                    <input
                        className="tweetInput"
                        type="text"
                        placeholder="What's happening?"
                        value={content}
                        onChange={updateContent}
                    />
                </div>
                <input type="file" accept="image/png, image/jpeg" value={image} onChange={updateImage} />
                <button className="tweetButton" type="submit">
                    Post Tweet
                </button>
            </form>
        </section>
    );
}

export default TweetForm;