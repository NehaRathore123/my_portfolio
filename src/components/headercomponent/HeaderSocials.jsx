import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/neha-rathore-49496a238/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/NehaRathore123" target='_blank'><FaGithub/></a>
        <a href="https://dribble.com" target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials