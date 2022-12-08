import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import SideNav from '../components/SideNav';

export function Marketplace() {
   const products = useLoaderData();

    return(
        <div className='flex relative w-full'>
            <div className='fixed top-0 p-16 sm:static w-full bg-[#FFFFFF] sm:w-[18%] lg:w-[20%] sm:pr-0 sm:pt-0 sm:pl-4 lg:pl-8 xl:pl-16 overflow-hidden box-content hidden sm:block'>
                <SideNav />
            </div>
            <div className="absolute left-10 top-2 w-[70%] sm:hidden">
                <h4 className='inline-block font-[SatoshiRegular] text-xl'>Filters</h4>
                <svg className='inline-block ml-2' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                </svg>
            </div>
            <div className='w-full sm:w-[80%] flex sm:items-center flex-col'>
                <div className=' w-[90%] sm:w-[80%] h-12 flex justify-end sm:justify-around items-center pr-4 shadow-[4px_4px_64px_rgba(0,0,0,0.1)] mb-4 lg:mb-11'>
                    <h4 className=' hidden sm:block w-[70%] font-[SatoshiRegular] text-base'>See 1-6 of 15 results</h4>
                    <select name='sort' className="sm:outline outline-1 sm:border-r-[16px] border-transparent rounded-md h-8 lg:w-[18%] text-center">
                        <option className='font-[SatoshiVariable]'>Sort by</option>
                        <option>Price</option>
                        <option>Artist</option>
                    </select>
                </div>
                <div className='w-full sm:w-[80%] grid grid-cols-1 sm:grid-cols-3 sm:gap-5 lg:gap-y-16 mb-16'>
                    {
                        products.length? products.map((product,index)=>(
                            <Link to={`/Marketplace/${product.id}`} className='flex py-4 flex-col items-center text-[#333333] sm:rounded-lg mb-2 sm:shadow-[0px_34px_68px_rgba(217,225,244,0.36)]' key={product.id}>
                                <img alt="" src={product.image} className="object-cover w-[85vw] h-[90vw] sm:w-[17vw] sm:h-[20vw] sm:rounded-lg mb-2"/>
                                <div className='flex justify-between sm:block w-[85vw] sm:w-[17vw]'>
                                    <h4 className='w-fit sm:w-[17vw] font-[SatoshiRegular] text-base uppercase mb-4'>{product.name}</h4>
                                    <h4 className='w-fit sm:w-[17vw] font-[SatoshiBold] text-lg uppercase'>${parseFloat(product.price).toFixed(2)}</h4>
                                </div>
                            </Link>
                        )): null
                    }
                </div>
                <button className='p-2 px-8 border rounded-lg border-[#333333]'>See more</button>
            </div>
        </div>
    )
}