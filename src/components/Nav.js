import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/photo-website-react/">Home</Link>
                </li>
                <li>
                    <Link to="/photo-website-react/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
