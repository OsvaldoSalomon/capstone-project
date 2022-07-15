import { useDispatch } from "react-redux";
import { login } from "../../../store/session";
import '../auth.css';

const Demo = () => {
    const dispatch = useDispatch();

    const loginDemo = (e) => {
        e.preventDefault();
        const email = "tester@test.com";
        const password = "password";

        return dispatch(login(email, password));
    }

    return (
        <button className='demoLoginButton' onClick={loginDemo}>Demo User</button>
    )
}

export default Demo;