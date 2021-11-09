import React from 'react'
import PropTypes from 'prop-types'

import 'animate.css';


export const GifGridItem = ({id, title, url}) => {

    console.log({id, title, url});

    return (
        <div className = "card animate__animated animate__bounce">
            <img src = {url} alt = {title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
