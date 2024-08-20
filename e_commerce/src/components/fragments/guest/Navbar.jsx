import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='flex justify-between p-5'>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div className='flex gap-5'>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/register">Register</Link>
            </div>
            <div>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </nav>
    )
}
