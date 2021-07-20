import React from 'react';
import style from './Social.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Social() {
  return (
    <div className={style.container}>
      <FaGithub />
      <FaLinkedin />
      <FaInstagram />
      <FaFacebook />
      <FaTwitter />
    </div>
  )
}

export default Social;