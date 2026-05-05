import React from 'react'

const Btn = ({children,className}) => {
  return (
    <>
    <button className={`py-3.75 px-6 bg-[#734BDF] rounded-full text-[#FFFFFF] font-semibold`}>
        {children}
    </button>
      
    </>
  )
}

export default Btn
