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

    const userComponents = (
        <>
            <li className='profilesListElement' key={users[1]?.id}>
                <img className="profileSuggestionImage" src={users[1]?.profilePic} alt={users[1]?.username} />
                <NavLink className='profileSuggestionUsername'
                         to={`/users/${users[1]?.id}`}>@{users[1]?.username}</NavLink>
            </li>
            <li className='profilesListElement' key={users[2]?.id}>
                <img className="profileSuggestionImage" src={users[2]?.profilePic} alt={users[2]?.username} />
                <NavLink className='profileSuggestionUsername'
                         to={`/users/${users[2]?.id}`}>@{users[2]?.username}</NavLink>
            </li>
            <li className='profilesListElement' key={users[3]?.id}>
                <img className="profileSuggestionImage" src={users[3]?.profilePic} alt={users[3]?.username} />
                <NavLink className='profileSuggestionUsername'
                         to={`/users/${users[3]?.id}`}>@{users[3]?.username}</NavLink>
            </li>
            <li className='profilesListElement' key={users[0]?.id}>
                <img className="profileSuggestionImage" src={users[0]?.profilePic} alt={users[0]?.username} />
                <NavLink className='profileSuggestionUsername'
                         to={`/users/${users[0]?.id}`}>@{users[0]?.username}</NavLink>
            </li>
        </>
    );


    return (
        <div className='profileSuggestionBody'>
            <h2>Most visited profiles: </h2>
            <ul>{userComponents}</ul>
        </div>
    );
}

export default ProfileSuggestion;