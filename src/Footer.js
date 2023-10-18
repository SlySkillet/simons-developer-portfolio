import React from 'react'
import { Link } from 'react-router-dom'
import { SiLinkedin, SiGithub} from 'react-icons/si'


function Footer(){
    return (
        <div className="footer">
            <p className="thanks">Thanks for visiting!</p>
            <Link className="nav-link contact" to="/contact" >Contact Me</Link >
            <div className='footer-link'>
                <Link className="nav-link" to="/contact"><SiLinkedin /></Link >
                <Link className="nav-link" to="/contact"><SiGithub /></Link >
            </div>

        </div>
    )
}

export default Footer
