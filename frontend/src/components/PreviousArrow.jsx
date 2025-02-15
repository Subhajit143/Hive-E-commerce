import React from 'react'
import { GrPrevious } from "react-icons/gr";

const PreviousArrow = (props) => {
  const {onClick}=props;
    return (
    <div onClick={onClick} className='w-14 h-14 rounded-full text-slate-500 hover:text-black hover:font-bold  sm:text-2xl duration-300 bg-opacity-40 hover:bg-opacity-100 flex items-center justify-center absolute top-[35%] left-[-80px] z-10 '>
        <GrPrevious/>
    </div>
  )
}

export default PreviousArrow