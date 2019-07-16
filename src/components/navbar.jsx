import React from 'react';
import { useUserSession } from '../user-context';

const ProfileNav = () => {
    const { user, logOut } = useUserSession()

    function onClick(e) {
        e.preventDefault()
        logOut()
    }

    return (
        <ul class="navbar-nav ml-auto">
            <li className="nav-item">
                <span classnName="navbar-text">Welcome {user.displayname}</span>
            </li>
            {!user.__guest && (
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={onClick}>Log Out</a>
                </li>
            )}
        </ul>
    )
}

const Navbar = () => (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark mf-4">
        <div className="container">
            <a className="navbar-brand" href="/">React Context</a>

            <ProfileNav />
        </div>
    </div>
)

export default Navbar