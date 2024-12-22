import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const SearchInput = () => {
    const [search,setSearch]=useState("")
  return (
    <div className='flex h-8  my-4 relative items-center'>
        <input onChange={(e)=>setSearch (e.target.value)} value={search} type="text" placeholder='Search...' className=' pl-4 pr-10 ' />
        {search?(
            <IoMdClose onClick={()=>setSearch("")} className='absolute text-lg right-4 top-2.5 hover:text-red-600 cursor-pointer duration-700' />
                ):(
            <IoSearch className='absolute text-lg right-4 top-2.5' />
        )}
    </div>

  )
}

export default SearchInput