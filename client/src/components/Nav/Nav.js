import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss';

const Nav = () => {
  return (
    <ul className="navbar_container">
      <li>
        <Link to="/create">Create</Link>
      </li>
    </ul>
  )
}

export default Nav
