import React from 'react';
import style from './Social.module.css';
import { social } from '../../utils/SocialData';

function Social() {
  return (
    <div className={style.container}>
      <div className={style.social_container}>
        {social.map((el, i) => {
          return (
            <a href={el.link} target='blank' key={i}>{el.icon}</a>
          )
        })}
      </div>
    </div>
  )
}

export default Social;