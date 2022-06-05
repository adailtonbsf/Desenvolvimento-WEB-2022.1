import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Welcome to the homepage</h2>
            <p>You can do this, I believe in you.</p>
            <nav>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default Home;