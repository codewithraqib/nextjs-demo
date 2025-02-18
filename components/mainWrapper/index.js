import React from 'react'
import classes from './mainWrapper.module.css'


function Mainwrapper(){

  const mainWrapperArr=[
    {
     id:0,
      title: "CUSHIONING TO THE MAX",
      subTitle: "Coming 2.7",
      buttonText: "Notify Me",
      image:"/assets/images/mainWrapper/main_img.png"
    },
    {
      id:1,
      title: "FOOTWEAR FOR THE WEEKEND",
      subTitle: "Coming 2.7",
      buttonText: "Notify Me",
      image:"/assets/images/mainWrapper/main_img.png"
    }
   
  ]

    return(
      <div className={classes.main_wrapper}>
        <div className={classes.image_parent}>
            <img className={classes.image_} src="/assets/images/mainWrapper/main_img.png" alt='abc'/>
        </div>
        <div className={classes.main_head}>
            <div className={classes.head}>{mainWrapperArr[0].title}</div>
            <div className={classes.sub_head}>Coming 2.7</div>
            <div className={classes.button_head}><button className={classes.button_}>Notify Me</button></div>

        </div>
      </div>
    )
}
export default Mainwrapper