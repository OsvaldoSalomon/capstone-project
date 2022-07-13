import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet } from "../../../../store/tweets";
import './CreateTweet.css';

const TweetForm = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    // const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value);
    const sessionUser = useSelector((state) => state.session.user);

    const reset = () => setContent('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            userId: sessionUser.id,
            content,
        };

        console.log(payload);

        dispatch(addTweet(payload)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
        reset();
    };
    
    return (
        <section className="tweetFormContainer">
            <form className="tweetForm" onSubmit={handleSubmit}>
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
                        value={content}
                        onChange={updateContent}
                    />
                    <button className="tweetButton" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default TweetForm;