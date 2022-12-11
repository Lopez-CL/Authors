import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <NavLink className='mx-2' to='/'>Home</NavLink>
            <NavLink to='/new'>Add an Author</NavLink>
        </div>
    )
}

export default NavBar