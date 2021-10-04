import React from 'react'

export const GifGridItem = ({img}) => {
    return (
        <div>
            <img src={img.url} alt={img.title}></img>
            <p>{img.title}</p>
        </div>
    )
}
