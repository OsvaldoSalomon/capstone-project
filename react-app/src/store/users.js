const GET_ALL_USERS = "/users/getAllUsers";
const GET_USER = "/users/getUser";
const FOLLOW_UNFOLLOW = "/users/follow";

const loadAllUsers = (users) => ({
    type: GET_ALL_USERS,
    users
});

const loadUser = (user) => ({
    type: GET_USER,
    user
});

const followUnfollowUser = (user) => ({
    type: FOLLOW_UNFOLLOW,
    user
});

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch('/api/users');

    if (response.ok) {
        const userList = await response.json();
        dispatch(loadAllUsers(userList));
        return userList;
    }
}

export const getSingleUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`);

    if (response.ok) {
        const user = await response.json();
        dispatch(loadUser(user));
        return user;
    }
}

export const followUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/follow`);

    if (response.ok) {
        const user = await response.json();
        dispatch(followUnfollowUser(user));
        return user;
    }
}

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            const allUsers = action.users;
            return allUsers;
        case GET_USER:
            const singleUser = action.user;
            return singleUser;
        case FOLLOW_UNFOLLOW:
            const userFollow = action.user;
            return userFollow;
        default:
            return state;
    }
}

export default userReducer;
