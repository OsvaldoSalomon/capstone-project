import { useSelector } from "react-redux";
import './ProfileCard.css'

const ProfileCard = () => {
    const user = useSelector(state => (state.session.user))

    return (
        <div className='profileCardBody'>
            <div className='profileCardBackground'></div>
            {/*<div className='profileCardPicture'><img src={ user.profilePic } alt={ `${ user.username } profile picture` }/></div>*/}
            <div className='profileCardInfo'>
                <h3>{user?.firstName} {user?.lastName}</h3>
                <h4>{user?.username}</h4>
                <p>{user?.bio}</p>
            </div>
        </div>
    )
}

export default ProfileCard;