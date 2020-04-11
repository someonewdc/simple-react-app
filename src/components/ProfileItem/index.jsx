import React from 'react'
import classes from './ProfileItem.module.css'
import vk from '../../images/vk.svg' 
import twitch from '../../images/twitch.svg' 
import telegram from '../../images/telegram.svg' 
import youtube from '../../images/youtube.svg' 
import web from '../../images/web.svg' 
import twitter from '../../images/twitter.svg' 

const ProfileItem = ({ city, languages, social, error }) => {
  const imagesObj = {
    vk,
    twitch,
    twitter,
    telegram,
    youtube,
    web
  }

  if (error) return (
    <div className={classes.ErrorWrapper}>
      <h2>{error}</h2>
    </div>
  )

  return (
  <ul className={classes.ProfileItem}>
    
    <li className={classes.Item}>
      <strong>Город:</strong> 
        {
          city
        }
    </li>

    <ul className={classes.Item}>
      <strong>Языки:</strong> 
      {
        languages.map((languege, index) => <li key={index}>{languege}</li>)
      }
    </ul>
    <ul className={classes.Item}>

      <strong>Ссылки:</strong> 
      {
        social.map((item, index) => {
          return (
          <li key={index}>
            <a rel="noopener noreferrer" target="_blank" href={item.link}>
              <img src={imagesObj[item.label]} alt=""/>
            </a>
          </li>
            )
        })
      }

    </ul>
  </ul>
  )
}

export default ProfileItem
