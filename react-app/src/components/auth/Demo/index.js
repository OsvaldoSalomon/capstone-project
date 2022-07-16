import { useDispatch } from "react-redux";
import { login } from "../../../store/session";
import '../auth.css';

const Demo = () => {
    const dispatch = useDispatch();

    const loginDemo = (e) => {
        e.preventDefault();
        const email = "demo@twittr.io";
        const password = "password";

        return dispatch(login(email, password));
    }

    return (
        <button className='demoLoginButton' onClick={loginDemo}>Demo User</button>
    )
}

export default Demo;