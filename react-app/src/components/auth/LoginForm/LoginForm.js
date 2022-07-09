import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import "./Login.css";

const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
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
                    {errors.map((error, ind) => (
                        <div className="errors" key={ind}>
                            {error}
                        </div>
                    ))}
                </div>
                <div>
                    <input
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
