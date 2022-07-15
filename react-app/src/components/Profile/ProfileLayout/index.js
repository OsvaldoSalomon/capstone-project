// import { useSelector } from "react-redux";
import ProfileCard from "../ProfileCard";
import ProfileTweetList from "../ProfileTweetList";
import ProfileSuggestion from "../ProfileSuggestion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileLayout = () => {
    // const user = useSelector(state => (state.session.user))
    const [user, setUser] = useState({});
    const { userId } = useParams();

    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setUser(user);
        })();
    }, [userId]);

    if (!user) {
        return null;
    }

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