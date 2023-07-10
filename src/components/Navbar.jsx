import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Link to="/" >
                create
            </Link><br />
            <Link to="/read" >
                Read
            </Link><br />
            
        </>
    )
}

export default Navbar