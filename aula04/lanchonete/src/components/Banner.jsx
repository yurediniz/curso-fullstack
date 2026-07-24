import React from 'react'
import logo from "../assets/logo.jpg"

const Banner = () => {
  return (
    <div>
        <img src="banner.png" width={500}/>
        <img src={logo} width={100}/>
    </div>
  )
}

export default Banner