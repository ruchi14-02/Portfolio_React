import React from "react"
import {NavLink} from 'react-router-dom';
import "./style.css"

function Menu() {
    
    return( 
        <nav className='navbar navbar-expand-md navbar-dark menucolor'>
            <div className='container'>
                <NavLink to={'/'} className = 'navbar-brand'>Ruchi Agrawal</NavLink>
                <button className='navbar-toggler' data-bs-toggle ="collapse" data-bs-target = "#menu">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="menu">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to={'/'} className ='nav-link'>Home</NavLink>
                        </li>
             

                        <li className='nav-item'>
                            <NavLink to={'/education'} className ='nav-link'>Education and Exprience</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/skills'} className ='nav-link'>Skills</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/myprojects'} className ='nav-link'>My Projects</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/contact'} className ='nav-link'>contact</NavLink>
                        </li>
                
                    </ul>

                </div>
            </div>
        </nav>
    )
        
    
}

export default Menu