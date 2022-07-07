import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import axios from 'axios'
import '../css/home.css'

function Home() {
    const [list, setList] = useState([])
    const [breed, setBreed] = useState("")
    const [image, setImage] = useState("")
    const [alert, setAlert] = useState(false)
    let navigate = useNavigate();
    
    React.useEffect(() => {
        getCategories()
    }, [])
    const getCategories = async () => {
        const url = 'https://dog.ceo/api/breeds/list/all'
        const result =  await axios.get(url)
        setList(Object.keys(result.data.message))
    }
    const getImage = async () =>{
        if(breed != ""){
            const url = 'https://dog.ceo/api/breed/'+breed+'/images'
            const result = await axios.get(url)
            setImage(result.data.message[0])
            let randomImage = result.data.message[Math.floor(Math.random()*result.data.message.length)]
            localStorage.setItem("imgUrl",randomImage)
            navigate("/result")
        }
        setAlert(true)
    }
    const handleChange = (e) =>{
        setAlert(false)
        setBreed(e.target.value)
    }
    return (
        <div className='homeContainer'>
            <ul>
                {list.length === 0 && <p>Loading...</p>}
                <h1 className='titleHome'>Select a dog breed</h1>
                <select value={breed} onChange={handleChange}  selected={list[0]} className='select'>
                    <option value=""  disabled hidden>Choose here..</option>
                    {list.map((item,e) => {
                        return (
                            <option key={e} value={item}>
                                {item}
                            </option>
                        )
                    })}
                </select>
                {alert ? <a className='alert'>Please select something from the list</a> : null}
                <button onClick={getImage} className='submitButton'>Search</button>
            </ul>
        </div>
    )
}

export default Home
