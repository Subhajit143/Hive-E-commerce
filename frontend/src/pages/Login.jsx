import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [iser, setIser] = useState({
        email: '',
        password: '',
    });
    const navigate=useNavigate()
    const {storeTokenInLs}=useAuth();
    const handleloginInput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setIser({...iser,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch('http://localhost:5000/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(iser)
            })

            const res_data=await response.json()
            console.log(res_data.extraDetails)
            if(response.ok){
                storeTokenInLs(res_data.token) 
                toast.success("Login Successful")
                setIser({
                    email: '',
                    password: ''
                })
                navigate("/")
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message)
                console.log("Invalid Credentials",response);
                
            }
            
        } catch (error) {
            console.log("Error from login jsx =",error);
            
        }
    }

  return (
    <>
    <main>
        <div>

            <div className=' grid justify-center'>
                <h1 className='text-center text-4xl font-bold py-10'>Login</h1>
                <form action="" onSubmit={handleSubmit} className='container border bg-slate-50 drop-shadow-lg  rounded-lg w-auto p-10'>
                    <div className='text-xl '>
                    <label>Email</label>
                        <input value={iser.email} onChange={handleloginInput} type="email" name="email" placeholder="Enter your Email" required  autoComplete="off" className='w-full shadow-xl border border-slate-300 rounded-lg px-3 py-1' />
                    </div>

                    <div className='text-xl py-5'>
                    <label>Password</label>
                        <input value={iser.password} onChange={handleloginInput} type="password" name="password" placeholder="Enter your Password" required  autoComplete="off" className='w-full shadow-xl border border-slate-300 rounded-lg px-3 py-1' />
                    </div>

                    <div className='text-center text-xl py-5'>
                        <button type="submit" className='bg-yellow-400 p-2 rounded-lg '>Submit</button>
                    </div>

                    <p>You didnt have any account?</p>
                    <div>
                        <a href="/register" className='text-yellow-600'>Create an Account</a>
                    </div>
                </form>
            </div>
        </div>
    </main>
    </>
  )
}

export default Login