import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import "./SignUp.css";

const SignUpForm = () => {
	const [errors, setErrors] = useState([]);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthday, setBirthday] = useState(new Date());
	const [bio, setBio] = useState("");
	const [profilePic, setProfilePic] = useState(
		"https://c4.wallpaperflare.com/wallpaper/365/376/18/lego-minimalism-yellow-wallpaper-preview.jpg"
	);
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onSignUp = async (e) => {
		e.preventDefault();
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

		console.log("ON SIGN UP", userData);

		if (password === repeatPassword) {
			const data = await dispatch(signUp(userData));
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
					{errors.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
				<div>
					<input
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
				<button className="signupButton" type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
