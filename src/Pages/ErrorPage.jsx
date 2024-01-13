import React from 'react'

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="rounded-2xl bg-black/75 flex px-14 items-center gap-10 justify-between m-auto lg:w-9/12 lg:h-5/6 flex-row">
        <span className='text-4xl text-white m-auto'>City not found</span>
      </div>
    </div>
  )
}

export default ErrorPage