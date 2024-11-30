import React from 'react'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({}) => {
  return (
    <div className='text-center text-4xl pb-5'>
        <p className='border-b-4 inline-block pb-2'>My Projects</p>
      </div>
  )
}

export default Heading
