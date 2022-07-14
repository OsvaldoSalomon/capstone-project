import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import './NavBar.css'

const NavBar = () => {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink className='linkQuestions' to="/tweets" exact={true} activeClassName="active">
                    All Tweets
                </NavLink>
                <LogoutButton />
            </>
        );
    } else {
        <>
            <NavLink to="/login" exact={true} activeClassName="active">
                Login
            </NavLink>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
            </NavLink>
        </>;
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
