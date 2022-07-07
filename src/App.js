import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Result from './components/Result'
import Header from './components/Header'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
   const [token, setToken] = useState("")
   useEffect(()=>{
    console.log(window.sessionStorage.getItem(token))
      if(sessionStorage.getItem("token") != null){
        setToken(sessionStorage.getItem("token"))
      }
   },[])
  return (
    <Router>
      {token != "" ?
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/result' exact element={<Result/>}/>
          </Routes> 
        </div>
      :
      <Login />}
    </Router>
  );
}

export default App;
