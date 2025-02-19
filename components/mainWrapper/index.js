import React from 'react'
import classes from './mainWrapper.module.css'

const mainWrapperArr = [
  {
   id : 0,
    title: "CUSHIONING TO THE MAX",
    subTitle: "Coming 2.7",
    buttonText: "Notify Me",
    image:"/assets/images/mainWrapper/main_img.png"
  } ,
  {
    id:1,
    title: "BUILT TO BE DIFFERENT",
    subTitle: "More stability and better cushioning to unleash your explosive game",
    buttonText: "Shop",
    image:"/assets/images/mainWrapper/Screenshot25.png"
  }
]

function Wrapper(props){
  return(
      <div className={classes.main_wrapper}>
        <div className={classes.image_parent}>
            <img className={classes.image_} src={props.image} alt='abc'/>
        </div>
        <div className={classes.main_head}>
            <div className={classes.head}>{props.title}</div>
            <div className={classes.sub_head}>{props. subTitle}</div>
            <div className={classes.button_head}><button className={classes.button_}>{props.buttonText}</button></div>

        </div>
      </div>
    )
}


function createWrapper(mainWrapperArr){
  return(
   < Wrapper
   key={mainWrapperArr.id} 
   title={mainWrapperArr.title}
   subTitle={mainWrapperArr.subTitle}
   buttonText={mainWrapperArr.buttonText}
   image={mainWrapperArr.image}
   
   />
  )
}

function Mainwrapper(){
    return(
      <div>
      {mainWrapperArr.map(createWrapper)}
      </div>)
}
    
export default Mainwrapper




      /* // <div className={classes.main_wrapper}>
      //   <div className={classes.image_parent}>
      //       <img className={classes.image_} src="/assets/images/mainWrapper/main_img.png" alt='abc'/>
      //   </div>
      //   <div className={classes.main_head}>
      //       <div className={classes.head}>{mainWrapperArr[0].title}</div>
      //       <div className={classes.sub_head}>Coming 2.7</div>
      //       <div className={classes.button_head}><button className={classes.button_}>Notify Me</button></div>

      //   </div>
      // </div> */