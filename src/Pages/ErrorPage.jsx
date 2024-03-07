import React from 'react'

const ErrorPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="rounded-2xl bg-black/30 flex items-center justify-center mx-5 my-5 md:mx-24 lg:mx-44 h-5/6 flex-row">
        <span className='text-2xl sm:text-4xl text-white m-auto'>City not found</span>
      </div>
    </div>
  )
}

export default ErrorPage