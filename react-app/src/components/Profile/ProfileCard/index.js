import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProfileCard.css'

const ProfileCard = ({ user }) => {
    // const sessionUser = useSelector((state) => state.session.user);

    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }

    return (
        <div className='profileCardBody'>
            <div className='profileCardBackground'></div>
            <div className='profileCardInfo'>
                <img onError={addDefaultSrc} className="profileImageLogo" src={user.profilePic} alt={user.username} />
                <NavLink className='linkToUserProfile' to={`/users/${user?.id}`}><h3>{user?.firstName} {user?.lastName}</h3></NavLink>
                {/*{sessionUser.id == user.id ?*/}
                {/*    <NavLink className='linkToUserProfile' to={`/users/${user?.id}`}><h3>{user?.firstName} {user?.lastName}</h3></NavLink> :*/}
                {/*    <h3>{user?.firstName} {user?.lastName}</h3>}*/}
                <h4>@{user?.username}</h4>
                <p className='profileBio'>"{user?.bio}"</p>
            </div>
        </div>
    )
}

export default ProfileCard;