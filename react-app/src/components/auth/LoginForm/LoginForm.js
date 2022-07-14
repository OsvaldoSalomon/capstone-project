import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import "./Login.css";

const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const errors = [];
        if (email.length == 0) errors.push("Must provide a value for the email.");
        if (!emailRegex.test(email)) errors.push("Must provide a valid email.");
        if (password.length == 0)
            errors.push("Must provide a value for the password.");
        setErrors(errors);
    }, [email, password]);

    const onLogin = async (e) => {
        e.preventDefault();

        if (errors.length <= 0) {
            const data = await dispatch(login(email, password));
            if (data) {
                setErrors(data);
            }
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <div className="loginContainer">
            <form className="loginForm" onSubmit={onLogin}>
                <h1>Login</h1>
                <div>
                    {hasSubmitted && errors.map((error, ind) => (
                        <div className="errors" key={ind}>
                            {error}
                        </div>
                    ))}
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={updateEmail}
                    />
                </div>
                <div>
                    <input
                        required={true}
                        className="inputBox"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                    />
                </div>
                <button className="loginButton" type="submit">Login</button>
                <p>
                    Don't have an account?{' '}
                    <a className="linkSignup" href="/sign-up">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
