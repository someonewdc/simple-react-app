import React from 'react'
import classes from './NewsItem.module.css'

const NewsItem = ({ title, text }) => {
  return (
    <div className={classes.NewsItem}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default NewsItem
