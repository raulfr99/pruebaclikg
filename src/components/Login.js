import React, {useState} from 'react'
import {users} from './users'
import '../css/login.css'
function Login() {
    
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [adv, setAdv] = useState(false)
    const logIn = () => {
        users.map((item)=>{
            if(item.user === user && item.password === password){
                window.sessionStorage.setItem("token", item.token)
                window.sessionStorage.setItem("user", item.user)
                console.log(window.sessionStorage.getItem("token"))
                window.location.reload()
            }
            setAdv(true)
        })
    }
    return (
        <div className='loginContainer'>
            <h1>🐶Welcome to the Dog Api🐶</h1>
            <a> Please Login</a>
            <p>User</p>
            <input  type="text" onChange={(e)=> setUser(e.target.value)} placeholder="User.."/>
            <p>Password</p>
            <input  type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password.."/>
            {adv ? <p>Wrong username or password, try again.</p> : null}
            <button onClick={logIn}>Login</button>
            <p>Prueba Clik Graphics by Raul</p>
        </div>
    )
}

export default Login
