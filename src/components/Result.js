import React from 'react'
import {useNavigate} from 'react-router-dom'

import '../css/result.css'
function Result() {
    let navigate = useNavigate()
    return (
        <div className='resultContainer'>
            <h1>Here is the result...</h1>
            <img src={localStorage.getItem("imgUrl")} className='image'/>
            <button className='backButton' onClick={()=>navigate("/")}>Back to home</button>
        </div>
    )
}

export default Result