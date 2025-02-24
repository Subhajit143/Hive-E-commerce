import React from 'react'
import  logo  from '../assets/newlogo2-Black.png'
import Container from './Container'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
      <div className='flex mb-6 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
        <div className=''>
            <Link to="/"><img src={logo} className='mb-5 w-32' /></Link>
            <p className='w-full md:w-2/3 text-gray-400'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ad voluptate tempore mollitia illum.
            </p>
        </div>
        <div className=''>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>ABOUT</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div className=''>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8420204635</li>
                <li>subhajitmajumder147@gmail.com</li>
            </ul>
        </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ Hive All Right Reserved</p>
        </div>
    </Container>
  )
}

export default Footer