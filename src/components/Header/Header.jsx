import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../utils/logo.png';

function Header() {
  return (
    <div className={style.container}>
      <Link to='/'>
        <img src={logo} alt="logo countries app" />
      </Link>
      <div className={style.text}>
        <h1>Find country information</h1>
      </div>
    </div>
  )
}

export default Header;