import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './Profile.css';

const Profile = () => {
    const history = useHistory();
    const user = useSelector(state => (state.session.user))

    const onClicked = () => {
        history.push(`/users/${user.id}`)
    }

    return <button className='viewProfileButton' onClick={onClicked}>View my profile</button>
}

export default Profile;