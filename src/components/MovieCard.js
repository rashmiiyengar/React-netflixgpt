import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
 
const MovieCard = ({posterPath,onClick}) => {
  return (
    <div className='w-48 pr-4' onClick={onClick}> 
      <img src={IMG_CDN_URL + posterPath} alt='poster ' />
    </div>
  )
}

export default MovieCard
