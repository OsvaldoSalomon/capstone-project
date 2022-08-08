const GET_ALL_TWEETS = "/tweets/getAllTweets";
const GET_TWEET = "/tweets/getTweet";
const CREATE_TWEET = "/tweets/create";
const EDIT_TWEET = "/tweets/edit";
const DELETE_TWEET = "/tweets/delete";
const ADD_REMOVE_LIKE = "/tweets/like"

const loadTweets = (tweets) => ({
    type: GET_ALL_TWEETS,
    tweets
});

const loadTweet = (tweet) => ({
    type: GET_TWEET,
    tweet
});

const createTweet = (tweet) => ({
    type: CREATE_TWEET,
    tweet
});

const editTweet = (tweet) => ({
    type: EDIT_TWEET,
    tweet
});

const deleteTweet = (tweet) => ({
    type: DELETE_TWEET,
    tweet
});

const addRemoveLike = (tweet) => ({
    type: ADD_REMOVE_LIKE,
    tweet
})

export const getTweets = () => async (dispatch) => {
    const response = await fetch("/api/tweets");

    if (response.ok) {
        const tweetsList = await response.json();
        dispatch(loadTweets(tweetsList));
        return tweetsList;
    }
};

export const getSingleTweet = (tweetId) => async (dispatch) => {
    const response = await fetch(`/api/tweets/${tweetId}`);

    if (response.ok) {
        const singleTweet = await response.json();
        dispatch(loadTweet(singleTweet));
        return singleTweet;
    }
};

export const addTweet = (data) => async (dispatch) => {
    const response = await fetch("/api/tweets/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createTweet(data));

        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const updateTweet = (data) => async (dispatch) => {
    const response = await fetch(`/api/tweets/${data.tweetId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(editTweet(data));

        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const eraseTweet = (id) => async (dispatch) => {
    const response = await fetch(`/api/tweets/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        dispatch(deleteTweet(id));
        return response;
    }
};

export const likeUnlikeTweet = (data) => async (dispatch) => {
    const response = await fetch(`/api/tweets/${data.tweetId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addRemoveLike(data));

        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const uploadImage = (imageData) => async () => {
    // console.log("THUUUNK IMAGE")
    const { image, tweetId } = imageData;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("tweetId", tweetId);

    console.log("formData", formData);
    const res = await fetch("/api/images/upload", {
        method: "POST",
        body: formData,
    });

    console.log("response", res)
    if (res.ok) {
        return await res.json();
    }
};

const tweetsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_TWEETS:
            const allTweets = action.tweets;
            return allTweets;
        case GET_TWEET:
            const singleTweet = action.tweet;
            return singleTweet;
        case CREATE_TWEET:
            return { ...state, [action.tweet.id]: action.tweet };
        case EDIT_TWEET:
            return { ...state, [action.tweet.id]: action.tweet };
        case ADD_REMOVE_LIKE:
            return { ...state, [action.tweet.id]: action.tweet };
        case DELETE_TWEET:
            const newState = { ...state };
            delete newState[action.tweet.id];
            return newState;
        default:
            return state;
    }
};

export default tweetsReducer;
