import React from 'react'

import '../styles/SocialContainer.css'

const SocialContainer = (props: any) => {

    return (
        <a href={props.socialLinks}>
            <div className="social-container">
                    {props.icons} {props.text}
            </div>
        </a>
    )
}

export default SocialContainer