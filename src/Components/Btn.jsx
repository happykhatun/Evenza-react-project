import React from 'react'

const Btn = ({children,className}) => {
  return (
    <>
    <button className={`py-3.75 px-6 bg-purple rounded-full text-white font-semibold ${className}`}>
        {children}
    </button>
      
    </>
  )
}

export default Btn
