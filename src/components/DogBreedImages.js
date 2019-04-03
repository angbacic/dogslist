import React from 'react'


export default function DogBreedImages (props) {
const images= props.images
  return (
    <div className="dog-breed-images">

      This page will show images of the { props.breed } breed.
    
      <div>
        { images && images.map(url => <img src={ url } alt="Dog" />) }
        { !images && 'Loading...' }
      </div>
    </div>
  )
}


