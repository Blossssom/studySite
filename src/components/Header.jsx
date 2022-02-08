import { Link } from 'react-router-dom';
import '../css/main.css';

function Header() {
    return(
        <>
            <div className="wrap-header">
                    <Link to="/" className='logo-main'>
                        <h1>My Study</h1>
                    </Link>
            </div>
        </>
    );
}

export default Header;