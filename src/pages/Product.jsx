import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { MarketData } from '../dataset/marketData';

export default function Product() {
    const product = useLoaderData();
    const [productQuantity, setProductQuantity] = React.useState(1)

    const increaseQuantity =() =>(
        setProductQuantity(productQuantity+1)
    )

    const reduceQuantity =() =>(
        productQuantity !== 1? setProductQuantity(productQuantity-1): setProductQuantity(1)
    )

    return (
        <div className='w-full flex flex-col items-center text-[#333333] mb-8'>
            <div className='grid lg:grid-cols-2 w-[90vw] lg:border border-[#333333]'>
                <div className=" p-4">
                    <img className="object-cover w-full h-full" alt="" src={product.image} />
                </div>
                <div className='lg:border-l border-[#333333]'>
                    <div className='px-4 lg:py-8 lg:border-b border-[#333333] items-center flex justify-between'>
                        <h4 className='font-[SatoshiBold] text-lg uppercase lg:text-3xl'>{product.name}</h4>
                        <h4 className='lg:hidden font-[SatoshiVariable] text-xl'>${parseFloat(product.price).toFixed(2)}</h4>
                        <div className='hidden lg:flex items-center justify-center'>
                            <svg className="w-[25%]" width="33" height="42" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.7025 19.9475L17.5825 0.839591C17.4539 0.676461 17.2896 0.544532 17.102 0.453801C16.9145 0.36307 16.7086 0.315918 16.5 0.315918C16.2914 0.315918 16.0855 0.36307 15.8979 0.453801C15.7104 0.544532 15.5461 0.676461 15.4175 0.839591L0.297458 19.9475C0.104983 20.1842 0 20.4792 0 20.7835C0 21.0877 0.104983 21.3827 0.297458 21.6194L15.4175 40.7273C15.5461 40.8904 15.7104 41.0224 15.8979 41.1131C16.0855 41.2038 16.2914 41.251 16.5 41.251C16.7086 41.251 16.9145 41.2038 17.102 41.1131C17.2896 41.0224 17.4539 40.8904 17.5825 40.7273L32.7025 21.6194C32.895 21.3827 33 21.0877 33 20.7835C33 20.4792 32.895 20.1842 32.7025 19.9475ZM17.8746 25.4922V5.61656L29.4552 20.2546L17.8746 25.4922ZM15.1254 25.4922L3.54484 20.2546L15.1254 5.61656V25.4922ZM15.1254 28.4949V35.9503L5.95031 24.3491L15.1254 28.4949Z" fill="#333333" />
                            </svg>
                            <span className="font-[STIXTwoTextBold] text-3xl ml-2">0.09</span>
                        </div>
                    </div>
                    <ul className='px-4 text-xl lg:text-2xl rounded-sm leading-[3rem] md:leading-[5rem] lg:leading-[3rem] md:text-4xl mt-6'>
                        <li className='font-[SatoshiRegular] text-[#616161]'>Creator: <span className='text-[#4693ED] font-[600]'>Ali Dawa</span></li>
                        <li className='leading-[3rem] md:leading-[5rem] lg:leading-[3rem] font-[SatoshiRegular] lg:text-md xl:text-sm font-bold'>Made in Italy</li>
                        <li className='leading-[3rem] md:leading-[5rem] lg:leading-[3rem] font-[SatoshiVariable] lg:text-2xl sxl:text-md'>Total views:<span className='ml-2'>1.7k views</span></li>
                        <li className='font-[SatoshiVariable] text-3xl md:text-5xl lg:text-3xl xl:text-xl mt-4'>
                            <span className='hover:cursor-pointer' onClick={()=>reduceQuantity()}>-</span>
                            <span className='ml-2'>{productQuantity}</span>
                            <span className='ml-2 hover:cursor-pointer' onClick={()=>increaseQuantity()}>+</span>
                        </li>
                    </ul>
                    <div className='px-4 py-4 md:py-8 flex'>
                        <button className='w-[60%] lg:px-12 bg-[#3341C1] md:text-3xl lg:text-2xl text-[#FFFFFF] text-center rounded-md'>
                            Add to cart
                            <span className='hidden lg:inline-block ml-2 align-middle'>
                                <svg className="w-[60%]" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 6.74026C0 6.54166 0.0790176 6.3512 0.21967 6.21077C0.360322 6.07034 0.551088 5.99144 0.75 5.99144H18.4395L13.719 1.27992C13.5782 1.13931 13.4991 0.948606 13.4991 0.749758C13.4991 0.55091 13.5782 0.360206 13.719 0.219599C13.8598 0.078992 14.0508 4.68503e-09 14.25 0C14.4492 -4.68503e-09 14.6402 0.078992 14.781 0.219599L20.781 6.2101C20.8508 6.27966 20.9063 6.36229 20.9441 6.45326C20.9819 6.54424 21.0013 6.64176 21.0013 6.74026C21.0013 6.83875 20.9819 6.93628 20.9441 7.02725C20.9063 7.11823 20.8508 7.20086 20.781 7.27042L14.781 13.2609C14.6402 13.4015 14.4492 13.4805 14.25 13.4805C14.0508 13.4805 13.8598 13.4015 13.719 13.2609C13.5782 13.1203 13.4991 12.9296 13.4991 12.7308C13.4991 12.5319 13.5782 12.3412 13.719 12.2006L18.4395 7.48907H0.75C0.551088 7.48907 0.360322 7.41018 0.21967 7.26975C0.0790176 7.12932 0 6.93885 0 6.74026Z" fill="#F5F4F4" />
                                </svg>
                            </span>
                        </button>
                        <div className='rounded-md w-[15%] xl:w-[10%] border border-[#292929] ml-4 p-2 aspect-square flex justify-center items-center'>
                            <svg className="md:scale-[2] lg:scale-[1.3]" width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.575 0C17.226 0 14.9715 1.10354 13.5 2.84741C12.0285 1.10354 9.774 0 7.425 0C3.267 0 0 3.297 0 7.49319C0 12.6431 4.59 16.8392 11.5425 23.2153L13.5 25L15.4575 23.2016C22.41 16.8392 27 12.6431 27 7.49319C27 3.297 23.733 0 19.575 0ZM13.635 21.1853L13.5 21.3215L13.365 21.1853C6.939 15.3133 2.7 11.4305 2.7 7.49319C2.7 4.76839 4.725 2.7248 7.425 2.7248C9.504 2.7248 11.529 4.07357 12.2445 5.94005H14.769C15.471 4.07357 17.496 2.7248 19.575 2.7248C22.275 2.7248 24.3 4.76839 24.3 7.49319C24.3 11.4305 20.061 15.3133 13.635 21.1853Z" fill="#292929"/>
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 pr-6 py-6 md:py-12 lg:py-8 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-2xl md:text-4xl lg:text-3xl'>Description</h4>
                        <svg className="md:scale-150" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-center px-4 pr-6 py-6 md:py-12 lg:py-8 border-t border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-2xl md:text-4xl lg:text-3xl'>Listing</h4>
                        <svg className="md:scale-150" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-center px-4 pr-6 py-6 md:py-12 lg:py-8 border-y lg:border-b-0 border-[#333333]'>
                        <h4 className='font-[SatoshiVariable] text-2xl md:text-4xl lg:text-3xl'>Status</h4>
                        <svg className="md:scale-150" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------EXPLORE SECTION----------------------------------------------------------------------------------------------------- */}
            <h4 className='lg:hidden font-[SatoshiVariable] font-bold text-2xl md:text-4xl self-start ml-[5%] mt-12'>More from this collection</h4>
            <div className='hidden w-[91%] lg:flex items-center justify-between shadow-[4px_4px_64px_rgba(0,0,0,0.08)] mt-12 py-8 px-4 rounded-xl'>
                <h4 className='font-[SatoshiVariable] text-3xl'>Explore more from this collection</h4>
                <div className='flex'>
                    <div className="scale-150 hover:cursor-pointer rounded-full border border-[#333333] w-10 aspect-square flex items-center justify-center">
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z" fill="#333333" />
                        </svg>
                    </div>
                    <div className="scale-150 hover:cursor-pointer rounded-full border border-[#333333] ml-11 w-10 aspect-square flex items-center justify-center">
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.91505 5.85521L0.0687256 2.00888L1.16745 0.910156L6.11251 5.85521L1.16745 10.8003L0.0687256 9.70153L3.91505 5.85521Z" fill="#333333" />
                        </svg>
                    </div>
                </div>
            </div>

            {/*------------------------------------------------------------EXPLORE IMAGES-------------------------------------------------------------------------------- */}

            <div className='relative w-full flex pl-[5%] items-center px-4 mt-12 flex-nowrap overflow-hidden lg:overflow-scroll scrollbar-hide'>
                <div className="lg:hidden left-[12%] absolute hover:cursor-pointer rounded-full border border-[#ffffff] w-[15%] aspect-square flex items-center justify-center">
                    <svg width="15" height="26" viewBox="0 0 15 26" fill="none">
                        <path d="M0.339721 13.5015L12.5114 25.1171C12.7144 25.311 12.9843 25.4192 13.2648 25.4192C13.5454 25.4192 13.8152 25.311 14.0183 25.1171L14.0314 25.104C14.1302 25.01 14.2089 24.8968 14.2627 24.7714C14.3164 24.646 14.3441 24.5109 14.3441 24.3744C14.3441 24.238 14.3164 24.1029 14.2627 23.9775C14.2089 23.8521 14.1302 23.7389 14.0314 23.6449L2.56962 12.7074L14.0314 1.77429C14.1302 1.68029 14.2089 1.56714 14.2627 1.44172C14.3164 1.31631 14.3441 1.18125 14.3441 1.04476C14.3441 0.908278 14.3164 0.773218 14.2627 0.647802C14.2089 0.522387 14.1302 0.409235 14.0314 0.315231L14.0183 0.302105C13.8152 0.108194 13.5454 2.09808e-05 13.2648 2.09808e-05C12.9843 2.09808e-05 12.7144 0.108194 12.5114 0.302105L0.339721 11.9177C0.232677 12.0199 0.147457 12.1427 0.0892294 12.2789C0.0310013 12.415 0.000976563 12.5615 0.000976563 12.7096C0.000976563 12.8577 0.0310013 13.0042 0.0892294 13.1404C0.147457 13.2765 0.232677 13.3993 0.339721 13.5015Z" fill="#616161"/>
                    </svg>
                </div>
                <div className="lg:hidden right-[12%] absolute hover:cursor-pointer rounded-full border border-[#ffffff] ml-4 w-[15%] aspect-square flex items-center justify-center">
                    <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.004 11.9175L1.83239 0.30184C1.6293 0.107929 1.35949 -0.000244141 1.0789 -0.000244141C0.798317 -0.000244141 0.528501 0.107929 0.325411 0.30184L0.312305 0.314965C0.213511 0.408969 0.134842 0.52212 0.0810852 0.647536C0.0273275 0.772952 -0.000394821 0.90801 -0.000394821 1.0445C-0.000394821 1.18098 0.0273275 1.31604 0.0810852 1.44146C0.134842 1.56687 0.213511 1.68002 0.312305 1.77403L11.7741 12.7115L0.312305 23.6447C0.213511 23.7387 0.134842 23.8518 0.0810852 23.9772C0.0273275 24.1026 -0.000394821 24.2377 -0.000394821 24.3742C-0.000394821 24.5107 0.0273275 24.6457 0.0810852 24.7711C0.134842 24.8966 0.213511 25.0097 0.312305 25.1037L0.325411 25.1168C0.528501 25.3108 0.798317 25.4189 1.0789 25.4189C1.35949 25.4189 1.6293 25.3108 1.83239 25.1168L14.004 13.5012C14.1111 13.3991 14.1963 13.2762 14.2545 13.1401C14.3127 13.004 14.3428 12.8574 14.3428 12.7093C14.3428 12.5613 14.3127 12.4147 14.2545 12.2786C14.1963 12.1425 14.1111 12.0196 14.004 11.9175Z" fill="white"/>
                    </svg>
                </div>
                {MarketData.map((prod, ind) => (
                    prod.id > 8 ?
                        <div key={ind} className='grow-1 shrink-0 mr-8 border border-[#333333] flex flex-col items-center aspect-square w-[99%] lg:w-[40%] '>
                            <svg className="scale-[1.3] md:my-6 self-end w-[7%] mr-[5%] lg:mr-[7.5%] my-[2%]" width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.075 2C6.06313 2 2 6.01736 2 10.9728C2 19.9456 12.725 28.1027 18.5 30C24.275 28.1027 35 19.9456 35 10.9728C35 6.01736 30.9369 2 25.925 2C22.856 2 20.1417 3.50662 18.5 5.81262C17.6632 4.63409 16.5515 3.67228 15.259 3.00861C13.9665 2.34495 12.5314 1.99898 11.075 2Z" stroke="#333333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <img src={prod.image} className="object-cover w-[90%] aspect-square" alt=""/>
                            <div className='w-[85%] flex justify-between items-center'>
                                <span className='font-[SatoshiVariable] text-xl md:text-4xl lg:text-3xl'>{prod.name}</span>
                                <div className='flex justify-around items-center md:py-4'>
                                    <svg className="w-[25%]" width="33" height="42" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.7025 19.9475L17.5825 0.839591C17.4539 0.676461 17.2896 0.544532 17.102 0.453801C16.9145 0.36307 16.7086 0.315918 16.5 0.315918C16.2914 0.315918 16.0855 0.36307 15.8979 0.453801C15.7104 0.544532 15.5461 0.676461 15.4175 0.839591L0.297458 19.9475C0.104983 20.1842 0 20.4792 0 20.7835C0 21.0877 0.104983 21.3827 0.297458 21.6194L15.4175 40.7273C15.5461 40.8904 15.7104 41.0224 15.8979 41.1131C16.0855 41.2038 16.2914 41.251 16.5 41.251C16.7086 41.251 16.9145 41.2038 17.102 41.1131C17.2896 41.0224 17.4539 40.8904 17.5825 40.7273L32.7025 21.6194C32.895 21.3827 33 21.0877 33 20.7835C33 20.4792 32.895 20.1842 32.7025 19.9475ZM17.8746 25.4922V5.61656L29.4552 20.2546L17.8746 25.4922ZM15.1254 25.4922L3.54484 20.2546L15.1254 5.61656V25.4922ZM15.1254 28.4949V35.9503L5.95031 24.3491L15.1254 28.4949Z" fill="#333333" />
                                    </svg>
                                    <span className="font-[STIXTwoTextBold] text-xl md:text-4xl lg:text-3xl ml-2">0.09</span>
                                </div>
                            </div>
                        </div>
                        :
                        undefined
                ))}
            </div>

            <button className='hidden lg:block mt-16 py-4 px-12 border rounded-xl border-image-[linear-gradient(94.97deg,#78A3AD_24.64%,rgba(192,86,9,0.49)_118.54%)] font-[SatoshiVariable] text-transparent text-2xl bg-clip-text bg-[linear-gradient(94.97deg,#78A3AD_24.64%,rgba(192,86,9,0.49)_118.54%)]'>Explore all</button>
        </div>
    )
}