import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from 'react-router-dom'
function Course() {
    
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white '>
    <div className='mt-28 item-center justify-center text-center dark:bg-slate-900 dark:text-white'>
        
        <h1 className='text-2xl font-semibold md:text-4xl '> We are delighted to have you <span className='text-pink-500'>Here!:;)</span></h1>
        <p className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi qui officiis libero consequuntur cumque illum numquam culpa perspiciatis veritatis maxime sit magnam quam, dolorem rem. Culpa nemo quo deleniti?
        </p>
       <Link to="/">
       <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
    
       </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4 dark:bg-slate-900 dark:text-white'>
        {
           list.map((item)=> (
            <Cards key={item.id} item={item}/>
           ))
        }
    </div>

   </div>
   </>
  )
}

export default Course
