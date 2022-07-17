import React from 'react'

import { CgWebsite } from 'react-icons/cg'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

import SocialContainer from './SocialContainer'

const socials = [

    {
      text: 'Official website',
      icons: <CgWebsite className="social-icons"/>,
      socialLinks: 'https://strixziv-portfolio.web.app/'
    },
  
    {
      text: 'Youtube',
      icons: <AiFillYoutube className="social-icons"/>,
      socialLinks: 'https://www.youtube.com/c/Xcact/'
    },
  
    {
      text: 'Github',
      icons: <AiFillGithub className="social-icons"/>,
      socialLinks: 'https://github.com/StrixzIV'
    },
    
    {
      text: 'Instragram',
      icons: <AiOutlineInstagram className="social-icons"/>,
      socialLinks: 'https://www.instagram.com/strixziv_/'
    },
  
]

const Socials = () => {
  return (
    <div className='social-container-wrapper'>

        {
            socials.map((e) => {
                return (
                    <SocialContainer 
                        icons={e.icons} 
                        text={e.text}
                        socialLinks={e.socialLinks}
                    />
                )
            })
        }

    </div>
  )
}

export default Socials