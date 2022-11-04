import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import { IoIosSad } from 'react-icons/io';
import './PageNotFound.css';


const PageNotFound = () => {
    let history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 4000)
    }, [])

    return (
        <div className="notFoundBody">
            <div className="notFoundInfo">
                <p>The page you're looking for doesn't exist.</p>
                <p>You'll be redirected soon.</p>
                <IoIosSad />
            </div>
        </div>
    )
}


export default PageNotFound;