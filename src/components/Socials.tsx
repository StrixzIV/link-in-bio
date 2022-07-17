import React from 'react'

import { CgWebsite } from 'react-icons/cg'
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai'

import SocialContainer from './SocialContainer'

const socials = [

    {
      text: 'Official website',
      icons: <CgWebsite />,
      socialLinks: 'https://strixziv-portfolio.web.app/'
    },
  
    {
      text: 'Youtube',
      icons: <AiFillYoutube />,
      socialLinks: 'https://www.youtube.com/c/Xcact/'
    },
  
    {
      text: 'Github',
      icons: <AiFillGithub />,
      socialLinks: 'https://github.com/StrixzIV'
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