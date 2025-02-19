import React from 'react'
import classes from './mainWrapper.module.css'

const HeroComponent = ({ data }) => {
  return (
    <div className={classes.main_wrapper}>
      <div className={classes.image_parent}>
        <img className={classes.image_} src={data.image} alt='abc' />
      </div>
      <div className={classes.main_head}>
        <div className={classes.head}>{data.title}</div>
        <div className={classes.sub_head}>{data.subTitle}</div>
        <div className={classes.button_head}><button className={classes.button_}>{data.buttonText}</button></div>
      </div>
    </div>
  )
}

export default HeroComponent
