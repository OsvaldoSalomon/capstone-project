import { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateTweet } from "../../../../store/tweets";
import './EditTweet.css'

const EditTweet = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { tweetId } = useParams();
    const tweet = useSelector(state => state.tweets[tweetId]);
    const sessionUser = useSelector((state) => state.session.user);
    const [contentInput, setContent] = useState(tweet?.content);
    // const [image, setImage] = useState('');
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

        console.log(payload);

        await dispatch(updateTweet(payload)).then(
            () => console.log(payload),
            history.push('/tweets')
        )
    };

    return (
        <div className='editTweetBody'>
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