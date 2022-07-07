import React from 'react'
import {useNavigate} from 'react-router-dom'

import '../css/header.css'
function Header() {
    let navigate = useNavigate();
    const userName = sessionStorage.getItem("user")
    const logOut = () =>{
        window.sessionStorage.clear()
        window.location.reload()
    }
    return (
        <div className='headerContainer'>
            <h1 onClick={()=>navigate("/")} className="logo">Api Dog🐶</h1>
                <ul>
                    <li>
                        <a className='logButton'>Hi {userName}</a>
                    </li>
                    <li>
                        <a className='logButton' onClick={logOut}>Logout</a>
                    </li>
                </ul>
        </div>
    )
}

export default Header
