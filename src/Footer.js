import React from 'react'
import { Link } from 'react-router-dom'



function Footer(){
    return (
        <div className="footer">
            <p>Thanks for visiting!</p>
            <Link className="nav-link" to="/contact">Contact</Link >
            <p>Links</p>
        </div>
    )
}

export default Footer
