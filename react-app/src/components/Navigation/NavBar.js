import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import './NavBar.css'

const NavBar = () => {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    if (sessionUser != null) {
        sessionLinks = (
            <>
                <NavLink className='linkQuestions' to="/tweets" exact={true} activeClassName="active">
                    All Tweets
                </NavLink>
                <LogoutButton />
            </>
        );
    } else {
        sessionLinks = (
            <div className='loginSignLink'>
                <NavLink className="authLink" to="/login">
                    Log In
                </NavLink>
                <NavLink className="authLink" to="/sign-up">
                    Sign Up
                </NavLink>
            </div>
        );
    }

    return (
        <div className="navBar">
            <div className="navLinks">
                <NavLink className="logoLink" exact to="/">
                    <div className="logo">TwittR</div>
                </NavLink>
                {sessionLinks}
            </div>
        </div>
    );
};

export default NavBar;
