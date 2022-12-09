import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { MarketData } from '../dataset/marketData';

export default function Product() {
    const product = useLoaderData();

    return (
        <div className='w-full flex flex-col items-center text-[#333333]'>
            <div className='grid grid-cols-2 w-[90vw] border border-[#333333]'>
                <div className=" p-4">
                    <img className="object-cover w-full h-full" alt="" src={product.image} />
                </div>
                <div className=' border-l border-[#333333]'>
                    <div className='px-4 py-4 border-b border-[#333333] items-center flex justify-between'>
                        <h4 className='font-[SatoshiBold] text-2xl'>{product.name}</h4>
                        <div className='flex items-center'>
                            <svg className="w-[25%]" width="33" height="42" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.7025 19.9475L17.5825 0.839591C17.4539 0.676461 17.2896 0.544532 17.102 0.453801C16.9145 0.36307 16.7086 0.315918 16.5 0.315918C16.2914 0.315918 16.0855 0.36307 15.8979 0.453801C15.7104 0.544532 15.5461 0.676461 15.4175 0.839591L0.297458 19.9475C0.104983 20.1842 0 20.4792 0 20.7835C0 21.0877 0.104983 21.3827 0.297458 21.6194L15.4175 40.7273C15.5461 40.8904 15.7104 41.0224 15.8979 41.1131C16.0855 41.2038 16.2914 41.251 16.5 41.251C16.7086 41.251 16.9145 41.2038 17.102 41.1131C17.2896 41.0224 17.4539 40.8904 17.5825 40.7273L32.7025 21.6194C32.895 21.3827 33 21.0877 33 20.7835C33 20.4792 32.895 20.1842 32.7025 19.9475ZM17.8746 25.4922V5.61656L29.4552 20.2546L17.8746 25.4922ZM15.1254 25.4922L3.54484 20.2546L15.1254 5.61656V25.4922ZM15.1254 28.4949V35.9503L5.95031 24.3491L15.1254 28.4949Z" fill="#333333" />
                            </svg>
                            <span className="font-[STIXTwoTextBold] text-xl ml-2">0.09</span>
                        </div>
                    </div>
                    <ul className='px-4 text-sm leading-[2rem]'>
                        <li className='font-[SatoshiRegular] text-[#616161]'>Creator: <span className='text-[#4693ED] font-medium'>Ali Dawa</span></li>
                        <li className='leading-[2rem] font-[SatoshiRegular] text-xs'>Made in Italy</li>
                        <li className='leading-[2rem] font-[SatoshiVariable] text-sm'>Total views:<span className='ml-2'>1.7k views</span></li>
                        <li className='font-[SatoshiVariable] text-xl'><span>-</span><span className='ml-2'>1</span><span className='ml-2'>+</span></li>
                    </ul>
                    <div className='px-4 py-8 flex'>
                        <button className='px-8 bg-[#3341C1] text-[#FFFFFF] text-center'>
                            Add to cart
                            <span className='inline-block ml-2 align-middle'>
                                <svg className="w-[60%]" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 6.74026C0 6.54166 0.0790176 6.3512 0.21967 6.21077C0.360322 6.07034 0.551088 5.99144 0.75 5.99144H18.4395L13.719 1.27992C13.5782 1.13931 13.4991 0.948606 13.4991 0.749758C13.4991 0.55091 13.5782 0.360206 13.719 0.219599C13.8598 0.078992 14.0508 4.68503e-09 14.25 0C14.4492 -4.68503e-09 14.6402 0.078992 14.781 0.219599L20.781 6.2101C20.8508 6.27966 20.9063 6.36229 20.9441 6.45326C20.9819 6.54424 21.0013 6.64176 21.0013 6.74026C21.0013 6.83875 20.9819 6.93628 20.9441 7.02725C20.9063 7.11823 20.8508 7.20086 20.781 7.27042L14.781 13.2609C14.6402 13.4015 14.4492 13.4805 14.25 13.4805C14.0508 13.4805 13.8598 13.4015 13.719 13.2609C13.5782 13.1203 13.4991 12.9296 13.4991 12.7308C13.4991 12.5319 13.5782 12.3412 13.719 12.2006L18.4395 7.48907H0.75C0.551088 7.48907 0.360322 7.41018 0.21967 7.26975C0.0790176 7.12932 0 6.93885 0 6.74026Z" fill="#F5F4F4" />
                                </svg>
                            </span>
                        </button>
                        <div className='w-[15%] border border-[#292929] ml-4 p-2 aspect-square flex justify-center items-center'>
                            <svg className="w-[90%]" width="49" height="34" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1161 5.95214L24.514 6.47514L24.9119 5.95214C27.0609 3.12763 30.8802 1.29517 35.2617 1.29517C42.1664 1.29517 47.6589 6.00547 47.6589 11.5823C47.6589 14.0997 46.2744 16.6813 44.0884 19.1745C41.9107 21.6583 38.993 23.9908 36.0541 26.002C33.1184 28.0109 30.1799 29.6869 27.9736 30.8612C26.871 31.4481 25.9525 31.909 25.3104 32.2228C24.9894 32.3797 24.7375 32.4999 24.5663 32.5806C24.5483 32.5891 24.5311 32.5972 24.5148 32.6048C24.4985 32.5971 24.4812 32.5889 24.463 32.5802C24.2918 32.4989 24.0399 32.3778 23.7189 32.2198C23.0767 31.9036 22.1582 31.4395 21.0555 30.8491C18.8491 29.6678 15.9103 27.9833 12.9745 25.9687C10.0353 23.9517 7.11733 21.6162 4.93933 19.1363C2.75267 16.6464 1.36914 14.0763 1.36914 11.5823C1.36914 6.00547 6.86164 1.29517 13.7663 1.29517C18.1478 1.29517 21.9671 3.12763 24.1161 5.95214Z" stroke="#292929" />
                            </svg>
                        </div>.
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-xl'>Description</h4>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-xl'>Listing</h4>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-xl'>Status</h4>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------EXPLORE SECTION----------------------------------------------------------------------------------------------------- */}

            <div className='w-[90%] flex items-center justify-between shadow-[4px_4px_64px_rgba(0,0,0,0.08)] mt-12 py-4 px-4 rounded-xl'>
                <h4 className='font-[SatoshiVariable]'>Explore more from this collection</h4>
                <div className='flex'>
                    <div className="rounded-full border border-[#333333] w-10 aspect-square flex items-center justify-center">
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z" fill="#333333" />
                        </svg>
                    </div>
                    <div className="rounded-full border border-[#333333] ml-4 w-10 aspect-square flex items-center justify-center">
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.91505 5.85521L0.0687256 2.00888L1.16745 0.910156L6.11251 5.85521L1.16745 10.8003L0.0687256 9.70153L3.91505 5.85521Z" fill="#333333" />
                        </svg>
                    </div>
                </div>
            </div>

            {/*------------------------------------------------------------EXPLORE IMAGES-------------------------------------------------------------------------------- */}

            <div className='w-full flex pl-[5%] items-center px-4 mt-12 flex-nowrap overflow-hidden'>
                {MarketData.map((prod, ind) => (
                    prod.id > 8 ?
                        <div className='grow-1 shrink-0 mr-8 border border-[#333333] flex flex-col items-center aspect-square w-[40%] '>
                            <svg className="self-end w-[7%] mr-[7.5%] my-[2%]" width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.075 2C6.06313 2 2 6.01736 2 10.9728C2 19.9456 12.725 28.1027 18.5 30C24.275 28.1027 35 19.9456 35 10.9728C35 6.01736 30.9369 2 25.925 2C22.856 2 20.1417 3.50662 18.5 5.81262C17.6632 4.63409 16.5515 3.67228 15.259 3.00861C13.9665 2.34495 12.5314 1.99898 11.075 2Z" stroke="#333333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <img src={prod.image} className="object-cover w-[85%] aspect-square" />
                            <div className='w-[85%] flex justify-between items-center'>
                                <span className='font-[SatoshiVariable] text-xl'>{prod.name}</span>
                                <div className='flex justify-around items-center'>
                                    <svg className="w-[25%]" width="33" height="42" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.7025 19.9475L17.5825 0.839591C17.4539 0.676461 17.2896 0.544532 17.102 0.453801C16.9145 0.36307 16.7086 0.315918 16.5 0.315918C16.2914 0.315918 16.0855 0.36307 15.8979 0.453801C15.7104 0.544532 15.5461 0.676461 15.4175 0.839591L0.297458 19.9475C0.104983 20.1842 0 20.4792 0 20.7835C0 21.0877 0.104983 21.3827 0.297458 21.6194L15.4175 40.7273C15.5461 40.8904 15.7104 41.0224 15.8979 41.1131C16.0855 41.2038 16.2914 41.251 16.5 41.251C16.7086 41.251 16.9145 41.2038 17.102 41.1131C17.2896 41.0224 17.4539 40.8904 17.5825 40.7273L32.7025 21.6194C32.895 21.3827 33 21.0877 33 20.7835C33 20.4792 32.895 20.1842 32.7025 19.9475ZM17.8746 25.4922V5.61656L29.4552 20.2546L17.8746 25.4922ZM15.1254 25.4922L3.54484 20.2546L15.1254 5.61656V25.4922ZM15.1254 28.4949V35.9503L5.95031 24.3491L15.1254 28.4949Z" fill="#333333" />
                                    </svg>
                                    <span className="font-[STIXTwoTextBold] text-xl ml-2">0.09</span>
                                </div>
                            </div>
                        </div>
                        :
                        undefined
                ))}
            </div>

            <button className='mt-16 py-2 px-4 border rounded-xl border-image-[linear-gradient(94.97deg,#78A3AD_24.64%,rgba(192,86,9,0.49)_118.54%)] font-[SatoshiVariable] text-transparent text-xl bg-clip-text bg-[linear-gradient(94.97deg,#78A3AD_24.64%,rgba(192,86,9,0.49)_118.54%)]'>Explore all</button>
        </div>
    )
}