import React, { useState } from 'react'

export default function LikeImage() {

  const LikeImageHOC = useState(0);

  const handleLikeImageCount = ()=>{
    setLikeImageCounter(setLikeImageCounter+1);
  }

  return (
    <div>
      <button onClick={handleLikeImageCount}>Like Image {likeImageCounter}</button>
    </div>
  )
}
