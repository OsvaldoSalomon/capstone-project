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
    const [birthday, setBirthday] = useState(new Date());
    const [bio, setBio] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [errorsClass, setErrorsClass] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const errors = [];
        if (username.length === 0) errors.push("Must provide a value for the username.");
        if (username.length <= 5) errors.push("Username must be longer than 5 characters.");
        if (username.length >= 15) errors.push("Username must not be longer than 15 characters.");
        if (firstName.length === 0) errors.push("Must provide a value for the first name.");
        if (firstName.length <= 3) errors.push("First name must be longer than 3 characters.");
        if (lastName.length === 0) errors.push("Must provide a value for the last name.");
        if (lastName.length <= 3) errors.push("Last name must be longer than 3 characters.");
        if (bio.length <= 15) errors.push("Bio must be longer than 15 characters.");
        if (bio.length >= 30) errors.push("Bio can't be longer than 30 characters.");
        if (email.length === 0) errors.push("Must provide a value for the email.");
        if (!emailRegex.test((email))) errors.push("Must provide a valid email.");
        if (password.length === 0) errors.push("Must provide a value for the password.");
        if (password.length <= 7) errors.push("Password must be longer than 8 characters.");
        if (repeatPassword.length === 0) errors.push("Please repeat the password.");
        if (repeatPassword !== password) errors.push("Passwords do not match.");
        setErrors(errors);
        if (hasSubmitted) {
            setErrorsClass('errorInput')
        }
    }, [username, firstName, lastName, bio, email, password, repeatPassword, hasSubmitted]);

    const onSignUp = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const userData = {
            username,
            firstName,
            lastName,
            bio,
            birthday,
            profilePic,
            email,
            password,
        };

        // console.log("ON SIGN UP", userData);

        if (errors.length <= 0) {
            const data = await dispatch(signUp(userData));
            console.log(data);
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
                                className={`inputBox ${errorsClass}`}
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
                                className={`inputBox ${errorsClass}`}
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
                                className={`inputBox ${errorsClass}`}
                                placeholder="* Last Name"
                                type="text"
                                name="lastName"
                                onChange={updateLastName}
                                value={lastName}
                            />
                        </div>
                        {/*<div>*/}
                        {/*    <input*/}
                        {/*        required={true}*/}
                        {/*        className={`inputBox ${errorsClass}`}*/}
                        {/*        placeholder="* Birthday"*/}
                        {/*        type="date"*/}
                        {/*        name="birthday"*/}
                        {/*        onChange={updateBirthday}*/}
                        {/*        value={birthday}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div>
                            <input
                                required={true}
                                className={`inputBox ${errorsClass}`}
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
                                className={`inputBox ${errorsClass}`}
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
                                className={`inputBox ${errorsClass}`}
                                placeholder="* Password"
                                type="password"
                                name="password"
                                onChange={updatePassword}
                                value={password}
                            />
                        </div>
                        <div>
                            <input
                                className={`inputBox ${errorsClass}`}
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
                                className={`inputBox ${errorsClass}`}
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
