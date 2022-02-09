import { Link } from 'react-router-dom';
import '../css/main.css';

function Header() {
    return(
        <>
            <header className="wrap-header">
                    <Link to="/" className='logo-main'>
                        <h1>My Study</h1>
                    </Link>
            </header>
        </>
    );
}

export default Header;