import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className = 'animate__animated animate__bounce'>{category}</h3>
            {loading && 'loading...'}
            {<div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            img={img}
                            {...img}
                        />
                    ))
                }
            </div>}
        </Fragment>
    )
}
