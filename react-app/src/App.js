import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm/LoginForm";
import SignUpForm from "./components/auth/SignUpForm/SignUpForm";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./components/HomePage";
import UserNotFound from "./components/UserNotFound/UserNotFound";
import Layout from "./components/Layout";
import ProfileLayout from "./components/Profile/ProfileLayout";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SingleTweetLayout from "./components/Tweets/SingleTweetLayout";
import { authenticate } from "./store/session";

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact={true}>
                    <HomePage />
                </Route>
                <Route path="/login" exact={true}>
                    <LoginForm />
                </Route>
                <Route path="/sign-up" exact={true}>
                    <SignUpForm />
                </Route>
                <ProtectedRoute path="/tweets" exact={true}>
                    <Layout />
                </ProtectedRoute>
                <ProtectedRoute path='/tweets/:tweetId' exact={true}>
                    <SingleTweetLayout />
                </ProtectedRoute>
                <ProtectedRoute path="/users/:userId" exact={true}>
                    <ProfileLayout />
                </ProtectedRoute>
                <ProtectedRoute path="/user-not-found" exact={true}>
                    <UserNotFound />
                </ProtectedRoute>
                <PageNotFound />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
