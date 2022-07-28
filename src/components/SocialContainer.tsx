import React from 'react'

import '../styles/SocialContainer.css'

interface SocialProps {
    socialLinks: string,
    text: string,
    icons?: JSX.Element
}

const SocialContainer = (props: SocialProps) => {

    return (
        <a href={props.socialLinks}>
            <div className="social-container">
                    {props.icons ?? ''} {props.text}
            </div>
        </a>
    )
}

export default SocialContainer