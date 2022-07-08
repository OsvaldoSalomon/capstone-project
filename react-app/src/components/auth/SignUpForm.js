import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

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
		<form onSubmit={onSignUp}>
			<div>
				{errors.map((error, ind) => (
					<div key={ind}>{error}</div>
				))}
			</div>
			<div>
				<label>User Name</label>
				<input
					type="text"
					name="username"
					onChange={updateUsername}
					value={username}
				/>
			</div>
			<div>
				<label>First Name</label>
				<input
					type="text"
					name="firstName"
					onChange={updateFirstName}
					value={firstName}
				/>
			</div>
			<div>
				<label>Last Name</label>
				<input
					type="text"
					name="lastName"
					onChange={updateLastName}
					value={lastName}
				/>
			</div>
			<div>
				<label>Birthday</label>
				<input
					type="date"
					name="birthday"
					onChange={updateBirthday}
					value={birthday}
				/>
			</div>
			<div>
				<label>Bio</label>
				<input type="text" name="bio" onChange={updateBio} value={bio} />
			</div>
			<div>
				<label>Email</label>
				<input type="text" name="email" onChange={updateEmail} value={email} />
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
					onChange={updatePassword}
					value={password}
				/>
			</div>
			<div>
				<label>Repeat Password</label>
				<input
					type="password"
					name="repeat_password"
					onChange={updateRepeatPassword}
					value={repeatPassword}
					required={true}
				/>
			</div>
			<button type="submit">Sign Up</button>
		</form>
	);
};

export default SignUpForm;
