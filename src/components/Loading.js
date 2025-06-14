import React from 'react'
// 📸 Import the loading spinner image (a GIF)
import Spinner from './Spinner.gif'

export default function Loading() {
  return (
    // 🎯 Centered loading spinner
    <div className='text-center'>
      <img src={Spinner} alt='loading' />
    </div>
  )
}
