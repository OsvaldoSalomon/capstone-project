import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import "./SignUp.css";

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const errors = [];
        if (username.length === 0) errors.push("Must provide a value for the username.");
        if (username.length < 4) errors.push("Username must be longer than 4 characters.");
        if (username.length >= 14) errors.push("Username must not be longer than 14 characters.");
        if (firstName.length === 0) errors.push("Must provide a value for the first name.");
        if (firstName.length < 3) errors.push("First name must be longer than 2 characters.");
        if (lastName.length === 0) errors.push("Must provide a value for the last name.");
        if (lastName.length <= 2) errors.push("Last name must be longer than 3 characters.");
        if (bio.length <= 15) errors.push("Bio must be longer than 15 characters.");
        if (bio.length >= 80) errors.push("Bio can't be longer than 80 characters.");
        if (email.length === 0) errors.push("Must provide a value for the email.");
        if (!emailRegex.test((email))) errors.push("Must provide a valid email.");
        if (password.length === 0) errors.push("Must provide a value for the password.");
        if (password.length <= 7) errors.push("Password must be longer than 8 characters.");
        if (repeatPassword.length === 0) errors.push("Please repeat the password.");
        if (repeatPassword !== password) errors.push("Passwords do not match.");
        setErrors(errors);
    }, [username, firstName, lastName, bio, email, password, profilePic, repeatPassword, hasSubmitted]);

    const onSignUp = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (profilePic.length <= 0) {
            setProfilePic('https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')
        }

        const userData = {
            username,
            firstName,
            lastName,
            bio,
            profilePic,
            email,
            password,
        };

        // console.log("ON SIGN UP", userData);

        if (errors.length <= 0) {
            const data = await dispatch(signUp(userData));
            // console.log(data);
            if (data) {
                setErrors(data);
            }
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateBio = (e) => {
        setBio(e.target.value);
    };

    const updateProfilePic = (e) => {
        setProfilePic(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to="/tweets" />;
    }

    return (
        <div className="signupContainer">
            <form className="signUpForm" onSubmit={onSignUp}>
                <h1>Sign Up</h1>
                <h4>* Required fields</h4>
                <div>
                    {hasSubmitted && errors.map((error, ind) => (
                        <p className="errors" key={ind}>{error}</p>
                    ))}
                </div>
                <div className='signUpFormFields'>
                    <div>
                        <div>
                            <input
                                required={true}
                                className='inputBox'
                                type="text"
                                name="username"
                                placeholder="* Username"
                                onChange={updateUsername}
                                value={username}
                            />
                        </div>
                        <div>
                            <input
                                required={true}
                                className='inputBox'
                                placeholder="* First Name"
                                type="text"
                                name="firstName"
                                onChange={updateFirstName}
                                value={firstName}
                            />
                        </div>
                        <div>
                            <input
                                required={true}
                                className='inputBox'
                                placeholder="* Last Name"
                                type="text"
                                name="lastName"
                                onChange={updateLastName}
                                value={lastName}
                            />
                        </div>
                        <div>
                            <input
                                required={true}
                                className='inputBox'
                                placeholder="* Bio"
                                type="text"
                                name="bio"
                                onChange={updateBio}
                                value={bio}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                required={true}
                                className='inputBox'
                                placeholder="* Email"
                                type="text"
                                name="email"
                                onChange={updateEmail}
                                value={email}
                            />
                        </div>
                        <div>
                            <input
                                required={true}
                                className='inputBox'
                                placeholder="* Password"
                                type="password"
                                name="password"
                                onChange={updatePassword}
                                value={password}
                            />
                        </div>
                        <div>
                            <input
                                className='inputBox'
                                placeholder="* Repeat Password"
                                type="password"
                                name="repeat_password"
                                onChange={updateRepeatPassword}
                                value={repeatPassword}
                                required={true}
                            />
                        </div>
                        <div>
                            <input
                                className='inputBox'
                                placeholder="Profile Picture (Optional)"
                                type="text"
                                name="profilePic"
                                onChange={updateProfilePic}
                                value={profilePic}
                            />
                        </div>
                    </div>
                </div>
                <button className="signupButton" type="submit">Sign Up</button>
                <p>
                    Already have an account?{' '}
                    <a className="linkLogin" href="/login">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
};

export default SignUpForm;
