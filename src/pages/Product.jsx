import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function Product() {
    const product = useLoaderData();

    return(
        <div className='w-full flex flex-col items-center'>
            <div className='grid grid-cols-2 w-[90vw] border border-[#333333]'>
                <div className=" p-4">
                    <img className="object-cover w-full h-full" alt="" src={product.image} />
                </div>
                <div className=' border-l border-[#333333]'>
                    <div className='px-4 py-8 border-b border-[#333333]'>
                        <h4 className='font-[SatoshiBold] text-xl'>{product.name}</h4>
                    </div>
                    <ul className='px-4'>
                        <li className='font-[SatoshiRegular]'>Creator: <span>Ali Dawa</span></li>
                        <li className='font-[SatoshiRegular]'>Made in Italy</li>
                        <li className='font-[SatoshiVariable]'>Total views:<span>1.7k views</span></li>
                        <li className='font-[SatoshiVariable]'><span>-</span><span>1</span><span>+</span></li>
                    </ul>
                    <div className='px-4 py-8'>
                        <button className='py-2 px-8 bg-[#3341C1] text-[#FFFFFF]'>Add to cart</button>
                    </div>
                    <div className='flex justify-between px-4 py-4 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-xl'>Description</h4>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                        </svg>
                    </div>
                    <div className='flex justify-between px-4 py-4 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-xl'>Listing</h4>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                        </svg>
                    </div>
                    <div className='flex justify-between px-4 py-4 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-xl'>Status</h4>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}