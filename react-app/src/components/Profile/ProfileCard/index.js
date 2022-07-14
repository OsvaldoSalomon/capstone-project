import './ProfileCard.css'

const ProfileCard = ({ user }) => {
    return (
        <div className='profileCardBody'>
            <div className='profileCardBackground'></div>
            <div className='profileCardInfo'>
                <img className="profileImageLogo" src={user.profilePic} alt={user.username} />
                <h3>{user?.firstName} {user?.lastName}</h3>
                <h4>{user?.username}</h4>
                <p className='profileBio'>{user?.bio}</p>
            </div>
        </div>
    )
}

export default ProfileCard;