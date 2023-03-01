import React, { useState } from 'react'

const Header = ({darktheme,setbgcolor}) => {
  return (
    <div className='main'>
        <div className='maidhead' style={{display:"flex",justifyContent:"center"}}>
        <h1>Overreacted</h1>
        <button style={{width:"100px",height:"30px" ,backgroundColor:"orange",color:'white',marginLeft:"50rem" }} onClick={()=>{
            if(darktheme.color==="white"){
                {console.log(darktheme.color)}
                setbgcolor({backgroundColor:"white",color:"black"})
            }
            else{
                setbgcolor({backgroundColor:"black",color:"white"})
            }
        }}
        >{darktheme.color}</button>
        </div>
        <div className='subdiv1'>
            <h2>The WET Codbase</h2>
            <p>Sunday 4th 2020 11 min read</p>
            <p>Come waste your time with me</p>
        </div>
        <div className='subdiv2'>
            <h2>Goodbye Clean code</h2>
            <p>Sunday 4th 2020 11 min read</p>
            <p>tujhe dekha to ye jana sanam</p>
        </div>
        <div className='subdiv3'>
            <h2>My Decade in Review</h2>
            <p>Sunday 4th 2020 11 min read</p>
            <p>Hai ye dil diwana</p>
        </div>
    </div>
  )
}

export default Header