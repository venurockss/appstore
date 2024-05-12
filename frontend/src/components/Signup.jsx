import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


function Signup() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      
    
  return (
    <>
    <div className="">
    <div id="my_modal_3" className="flex h-screen items-center justify-center p-5">
                    <div className="modal-box border-[2px] shadow-md p-5 ">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to="/">✕</Link>
                       
                        <h3 className="font-bold text-lg">SignUp</h3>

                        <div className='mt-4 space-y-2'>
                            <span>
                                Full Name 
                            </span>
                            <br>
                            </br>
                            <input type="text" placeholder='Enter your Full Name' className='w-80 px-3 py-1 border rounded outline-none '
                            {...register("fullname", { required: true })}/>
                            <br/>
                             {errors.fullname && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>
                                Email
                            </span>
                            <br>
                            </br>
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded outline-none '
                            {...register("email", { required: true })} /><br/>
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>
                                Password
                            </span>
                            <br>
                            </br>
                            <input type="text" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded outline-none '
                            {...register("Password", { required: true })}/>
                            <br/>
                             {errors.Password && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='flex justify-around mt-4 '>
                            <button className='bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>SignUp</button>
                            <p>
                            
                                Have Account? {" "}<button className="underline text-blue-500 cursor-pointer  "
                                 onClick={()=> 
                                    document.getElementsByClassName("modal").showModal()}>Login
                                    </button>{" "}
                                <Login/>
                            </p>
                            
                        </div>

                        </form>
                    </div>
                </div>
    </div>
    </>
  )
}

export default Signup
