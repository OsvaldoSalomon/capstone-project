import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet, uploadImage } from "../../../../store/tweets";
import { useHistory } from "react-router-dom";
import { BsImage } from 'react-icons/bs';
import './CreateTweet.css';

const TweetForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
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

    const removeImage = () => {
        setImage(null);
    }

    const reset = () => setContent('');

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
            reset();
            history.push(`/tweets/${newTweet.id}`);
        }
    };

    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }

    return (
        <section className="tweetFormContainer">
            <img onError={addDefaultSrc} className="tweetFormAuthorLogo" src={sessionUser.profilePic} alt={sessionUser.username} />
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
                        className="createTweetInput"
                        type="text"
                        placeholder="What's happening?"
                        value={content}
                        onChange={updateContent}
                    />
                </div>
                <div className='tweetFormInputButton'>
                    <div className='tweetFormImageUploadInput'>
                        <label className="custom-file-upload">
                            <input id="inputTag" type="file" name='file'
                                   accept="image/png, image/jpeg, image/jpg" onChange={updateImage} />
                            <BsImage className='iconImageUpload' />
                        </label>
                        <p onClick={removeImage}>{image?.name}</p>
                    </div>
                    <button className="tweetButton" type="submit">
                        Tweet
                    </button>
                </div>
            </form>
        </section>
    );
}

export default TweetForm;