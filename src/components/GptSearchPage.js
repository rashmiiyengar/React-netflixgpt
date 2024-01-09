import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSujjetions from './GptMovieSujjetions'
import { NETFLIX_BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div >
      <div className='absolute -z-10'> 

        <img src={NETFLIX_BACKGROUND} alt='netflix'/>
      </div>
      <GptSearchBar/>
      <GptMovieSujjetions/>
    </div>
  )
}

export default GptSearch
