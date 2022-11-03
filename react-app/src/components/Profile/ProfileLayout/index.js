import ProfileCard from "../ProfileCard";
import ProfileTweetList from "../ProfileTweetList";
import ProfileSuggestion from "../ProfileSuggestion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../../store/users";

const ProfileLayout = () => {
    const dispatch = useDispatch();
    // const userFromStore = useSelector(state => state.users)
    // console.log(">>>>>>>>>>>", userFromStore)

    const notFoundUser = {
        id: 404,
        firstName: 'Not Found',
        lastName: '',
        username: 'Not Found',
        email: 'Not Found',
        bio: 'Not Found',
        tweets: null,
        profilePic: 'https://images.unsplash.com/photo-1644366251160-8791a554e064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }

    const [user, setUser] = useState(notFoundUser);
    const { userId } = useParams();

    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            dispatch(getSingleUser(userId))
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setUser(user);
        })();
    }, [userId, dispatch]);

    return (
        <div className='layoutBody'>
            <ProfileCard user={user} className='profileLayout' />
            <div className='layoutCenter'>
                <ProfileTweetList user={user} />
            </div>
            <ProfileSuggestion className='usersLayout' />
        </div>
    )
}

export default ProfileLayout;