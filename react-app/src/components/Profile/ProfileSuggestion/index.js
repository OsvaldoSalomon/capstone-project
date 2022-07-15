import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ProfileSuggestion.css';

const ProfileSuggestion = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }

        fetchData();
    }, []);

    users.splice(0, 4);
    // console.log('users', users)
    // console.log('filteredUsers', filteredUsers)

    const userComponents = users.map((user) => {
        return (
            <li className='profilesListElement' key={user.id}>
                <img className="profileSuggestionImage" src={user.profilePic} alt={user.username} />
                <NavLink className='profileSuggestionUsername' to={`/users/${user.id}`}>@{user.username}</NavLink>
            </li>
        );
    });

    return (
        <div className='profileSuggestionBody'>
            <h1>More Profiles: </h1>
            <ul>{userComponents}</ul>
        </div>
    );
}

export default ProfileSuggestion;