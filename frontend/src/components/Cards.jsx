import React from 'react'

function Cards({item}) {
    return (
        <>
        <div className='dark:bg-slate-900 dark:text-white'>
        <div className='mt-4 my-4 dark:bg-slate-900 dark:text-white '>
            <div className='max-w-screen-2xl container rounded-lg  px-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white '>
                <div className="card w-75 bg-base-100 shadow-xl  border-[2px]  dark:bg-slate-900 dark:text-white">
              
                
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p></p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline ">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer rounded-full border-[1px] px-2 py-1 hover:bg-pink-500 hover:text-white duration-200">Buy Now </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
        </>
    )
}

export default Cards
