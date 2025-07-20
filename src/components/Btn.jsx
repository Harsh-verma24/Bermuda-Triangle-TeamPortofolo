import React from 'react'

const Btn = ({cnt}) => {
  return (
    <div>
      <button className='bg-violet-700 text-white text-xl px-4 py-2 rounded hover:bg-white hover:text-black hover:border-violet-700 hover:border-2 border-2 border-violet-700'>{cnt}</button>
    </div>
  )
}

export default Btn
