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
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const errors = [];
        if (username.length === 0) errors.push("Must provide a value for the username.");
        if (email.length === 0) errors.push("Must provide a value for the email.");
        if (!emailRegex.test((email))) errors.push("Must provide a valid email.");
        if (password.length === 0)
            errors.push("Must provide a value for the password.");
        if (repeatPassword.length === 0) errors.push("Must repeat the password.");
        if (repeatPassword !== password) errors.push("Passwords do not match.");
        setErrors(errors);
    }, [email, password, repeatPassword]);

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

    const updateBirthday = (e) => {
        setBirthday(e.target.value);
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
        return <Redirect to="/" />;
    }

    return (
        <div className="signupContainer">
            <form className="signUpForm" onSubmit={onSignUp}>
                <h1>Sign Up</h1>
                <div>
                    {hasSubmitted && errors.map((error, ind) => (
                        <p className="errors" key={ind}>{error}</p>
                    ))}
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={updateUsername}
                        value={username}
                    />
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        onChange={updateFirstName}
                        value={firstName}
                    />
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        onChange={updateLastName}
                        value={lastName}
                    />
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        placeholder="Birthday"
                        type="date"
                        name="birthday"
                        onChange={updateBirthday}
                        value={birthday}
                    />
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        placeholder="Bio"
                        type="text"
                        name="bio"
                        onChange={updateBio}
                        value={bio}
                    />
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        placeholder="Email"
                        type="text"
                        name="email"
                        onChange={updateEmail}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={updatePassword}
                        value={password}
                    />
                </div>
                <div>
                    <input
                        className="inputBox"
                        placeholder="Repeat Password"
                        type="password"
                        name="repeat_password"
                        onChange={updateRepeatPassword}
                        value={repeatPassword}
                        required={true}
                    />
                </div>
                <div>
                    <input
                        className="inputBox"
                        placeholder="Profile Picture"
                        type="text"
                        name="profilePic"
                        onChange={updateProfilePic}
                        value={profilePic}
                        required={true}
                    />
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
