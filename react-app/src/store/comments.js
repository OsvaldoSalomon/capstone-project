const GET_ALL_COMMENTS = "/comments/getAllComments";
const CREATE_COMMENT = "/comments/create";
const EDIT_COMMENT = "/comments/edit";
const DELETE_COMMENT = "/comments/delete";

const loadComments = (comments) => ({
    type: GET_ALL_COMMENTS,
    comments,
});

const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment,
});

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment,
});

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment,
});

export const getComments = () => async (dispatch) => {
    const response = await fetch("/api/comments");

    if (response.ok) {
        const commentsList = await response.json();
        dispatch(loadComments(commentsList));
        return commentsList;
    }
};

export const addComment = (data) => async (dispatch) => {
    // console.log('THUNK ADD COMMENT', data)
    const response = await fetch(`/api/comments/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    // console.log('responseeee', response)

    if (response.ok) {
        const data = await response.json();
        dispatch(createComment(data));

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

export const updateComment = (data) => async (dispatch) => {
    const response = await fetch(`/api/comments/${data.commentId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(editComment(data));

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

export const eraseComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        dispatch(deleteComment(id));
        return response;
    }
};

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_COMMENTS:
            const allComments = action.comments;
            return allComments;
        case CREATE_COMMENT:
            return { ...state, [action.comment.id]: action.comment };
        case EDIT_COMMENT:
            return { ...state, [action.comment.id]: action.comment };
        case DELETE_COMMENT:
            const newState = { ...state };
            delete newState[action.comment.id];
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;
