import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import "./Header.css"
function Header() {
  
  return (
    <div className='main-div-header'>
        <ul className='list-header'>
    <div className='header-div'>
        <NavLink to="/Redux-TodoApp/todolist" >All ToDos</NavLink>
        <NavLink to="/Redux-TodoApp/todolist/completed"  >Completed ToDos</NavLink>
        <NavLink to="/Redux-TodoApp/todolist/pending" >Pending ToDos</NavLink>
        
    </div>
        <div className='login-tab'>
            <NavLink to="/Redux-TodoApp/loginpage" >Log in</NavLink>
        </div>
        </ul>
    </div>
  )
}

export default Header