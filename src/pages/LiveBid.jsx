import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { liveAccounts } from '../dataset/LiveData';

export default function LiveBid() {
    const auction = useLoaderData();

    return (
        <div className='w-full flex flex-col items-center lg:mt-[2%]'>
            <div className='relative border border-[#000000] grid grid-cols-1 lg:grid-cols-2 h-[100vh] lg:h-[90vh] gap-x-0 lg:gap-x-5 max-w-[100%] lg:max-w-[80%] xl:max-w-[60%] overflow-hidden'>
                <div className='absolute right-0 lg:left-[3%] top-[2%] aspect-square w-fit rounded-full lg:bg-[rgba(184,180,180,0.49)]'>
                    <svg className='scale-[.6]' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3299 11.9229C10.2253 11.8183 10.1424 11.6941 10.0857 11.5575C10.0291 11.4208 10 11.2743 10 11.1264C10 10.9785 10.0291 10.832 10.0857 10.6954C10.1424 10.5587 10.2253 10.4345 10.3299 10.3299C10.4345 10.2253 10.5587 10.1424 10.6954 10.0857C10.832 10.0291 10.9785 10 11.1264 10C11.2743 10 11.4208 10.0291 11.5575 10.0857C11.6941 10.1424 11.8183 10.2253 11.9229 10.3299L23.5014 21.9107L35.0799 10.3299C35.1845 10.2253 35.3087 10.1424 35.4454 10.0857C35.582 10.0291 35.7285 10 35.8764 10C36.0243 10 36.1708 10.0291 36.3075 10.0857C36.4441 10.1424 36.5683 10.2253 36.6729 10.3299C36.7775 10.4345 36.8605 10.5587 36.9171 10.6954C36.9737 10.832 37.0028 10.9785 37.0028 11.1264C37.0028 11.2743 36.9737 11.4208 36.9171 11.5575C36.8605 11.6941 36.7775 11.8183 36.6729 11.9229L25.0922 23.5014L36.6729 35.0799C36.7775 35.1845 36.8605 35.3087 36.9171 35.4454C36.9737 35.582 37.0028 35.7285 37.0028 35.8764C37.0028 36.0243 36.9737 36.1708 36.9171 36.3075C36.8605 36.4441 36.7775 36.5683 36.6729 36.6729C36.5683 36.7775 36.4441 36.8605 36.3075 36.9171C36.1708 36.9737 36.0243 37.0028 35.8764 37.0028C35.7285 37.0028 35.582 36.9737 35.4454 36.9171C35.3087 36.8605 35.1845 36.7775 35.0799 36.6729L23.5014 25.0922L11.9229 36.6729C11.8183 36.7775 11.6941 36.8605 11.5575 36.9171C11.4208 36.9737 11.2743 37.0028 11.1264 37.0028C10.9785 37.0028 10.832 36.9737 10.6954 36.9171C10.5587 36.8605 10.4345 36.7775 10.3299 36.6729C10.2253 36.5683 10.1424 36.4441 10.0857 36.3075C10.0291 36.1708 10 36.0243 10 35.8764C10 35.7285 10.0291 35.582 10.0857 35.4454C10.1424 35.3087 10.2253 35.1845 10.3299 35.0799L21.9107 23.5014L10.3299 11.9229Z" fill="white"/>
                    </svg>
                </div>
                <div className='w-[20%] lg:w-[12%] absolute right-[32%] lg:right-[54%] top-[3%] bg-[#006CA2] lg:bg-[#4693ED] p-[2%] lg:p-[.5%]  rounded-xl lg:rounded-2xl'>
                    <h4 className='text-[#ffffff] text-center'>LIVE</h4>
                </div>
                <div className='w-[17%] rounded-xl absolute top-[3%] right-[12%] p-[2%] flex bg-[rgba(255,255,255,0.4)] justify-around items-center'>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.59961 7.19998C8.70418 7.19998 9.59961 6.30455 9.59961 5.19998C9.59961 4.09541 8.70418 3.19998 7.59961 3.19998C6.49504 3.19998 5.59961 4.09541 5.59961 5.19998C5.59961 6.30455 6.49504 7.19998 7.59961 7.19998Z" fill="white"/>
                        <path d="M14.9698 5.33C14.3817 3.80882 13.3608 2.49331 12.0332 1.54604C10.7056 0.598778 9.12953 0.0612865 7.49979 0C5.87005 0.0612865 4.29398 0.598778 2.96639 1.54604C1.6388 2.49331 0.617868 3.80882 0.0297873 5.33C-0.00992909 5.43985 -0.00992909 5.56015 0.0297873 5.67C0.617868 7.19118 1.6388 8.50669 2.96639 9.45396C4.29398 10.4012 5.87005 10.9387 7.49979 11C9.12953 10.9387 10.7056 10.4012 12.0332 9.45396C13.3608 8.50669 14.3817 7.19118 14.9698 5.67C15.0095 5.56015 15.0095 5.43985 14.9698 5.33ZM7.49979 8.75C6.857 8.75 6.22864 8.55939 5.69418 8.20228C5.15972 7.84516 4.74316 7.33758 4.49718 6.74372C4.25119 6.14986 4.18683 5.49639 4.31223 4.86596C4.43764 4.23552 4.74717 3.65642 5.20169 3.2019C5.65621 2.74738 6.2353 2.43785 6.86574 2.31245C7.49618 2.18705 8.14965 2.25141 8.74351 2.49739C9.33737 2.74338 9.84495 3.15994 10.2021 3.6944C10.5592 4.22886 10.7498 4.85721 10.7498 5.5C10.7485 6.36155 10.4056 7.18743 9.79642 7.79664C9.18722 8.40584 8.36133 8.74868 7.49979 8.75Z" fill="white"/>
                    </svg>
                    <h4 className='text-[#ffffff]'>295</h4>
                </div>
                <h4 className='absolute top-[3.5%] lg:top-auto lg:bottom-[3%] left-[4%] text-[#ffffff]'>Tag: Lost or Wither</h4>
                <h4 className='w-fit absolute text-3xl lg:text-2xl top-[50%] left-[50%] lg:left-[25%] font-bold -translate-x-[50%] -translate-y-[50%] text-[#ffffff]'>Current bid: ${auction.currBid}</h4>
                <div className='w-full h-[100vh] lg:h-[90vh] flex justify-center'>
                    <img src={auction.image} alt="" className='object-cover'/>
                </div>
                <div className='lg:relative flex-col self-end absolute left-[5%] lg:left-[.5%] w-[95%] overflow-hidden'>
                    <div className='h-[35vh] w-full lg:h-fit overflow-scroll'>
                        {
                            liveAccounts.map((acc, index)=>(
                                <div className='w-full mb-[4%]' key={acc.id}>
                                    <div className='aspect-square w-[12%] border border-[#ffffff] lg:border-[#000000] rounded-full mr-4 inline-block'>

                                    </div>
                                    <div className='inline-block text-[#ffffff] lg:text-[#000000]'>
                                        <h4 className='font-[SatoshiRegular]'>{acc.name}</h4>
                                        <h4 className='font-[SatoshiVariable]'>{acc.text}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='h-[10%] mb-4 flex justify-between overflow-hidden'>
                        <div className='relative w-[70%]'>
                            <input type="text" name="bid" placeholder='Place a bid...' className='w-full placeholder:pl-4 border border-gray-400 rounded-2xl p-2' />
                            <svg className='absolute top-2 right-5 scale-[.7]' width="34" height="31" viewBox="0 0 34 31" fill="none">
                                <path d="M33.6074 0.376159C33.416 0.202662 33.1742 0.0825394 32.9104 0.0299147C32.6465 -0.0227101 32.3717 -0.00564958 32.1182 0.0790905L0.915311 10.4119C0.646212 10.5048 0.414533 10.6701 0.251046 10.8858C0.0875588 11.1016 0 11.3574 0 11.6195C0 11.8816 0.0875588 12.1375 0.251046 12.3532C0.414533 12.5689 0.646212 12.7342 0.915311 12.8272L13.0986 17.2574L22.0907 9.0428L24.0905 10.864L15.0559 19.0914L19.9349 30.1863C20.04 30.4266 20.2219 30.6327 20.4571 30.7777C20.6923 30.9228 20.9699 31.0002 21.2539 31C21.5405 30.9946 21.8186 30.9103 22.0516 30.7581C22.2845 30.606 22.4613 30.3931 22.5588 30.1475L33.9053 1.73234C34.0019 1.50382 34.0252 1.255 33.9725 1.01489C33.9197 0.774768 33.7931 0.55325 33.6074 0.376159Z" fill="#292929"/>
                            </svg>
                        </div>
                        <div className='aspect-square border bg-[rgba(255,255,255,0.35)] lg:bg-none border-[rgba(255,255,255,0.35)] lg:border-[#000000] rounded-full flex justify-center items-center mr-[10%] lg:mr-[7%]'>
                            <svg className="scale-[.6]" width="40" height="33" viewBox="0 0 40 33" fill="none">
                                <g filter="url(#filter0_i_560_201)">
                                    <path d="M28.4215 0.29248C24.7185 0.29248 21.4563 2.19813 19.6048 5.19272C17.7533 2.19813 14.4911 0.29248 10.7881 0.29248C4.96904 0.29248 0.208008 5.19272 0.208008 11.1819C0.208008 21.9806 19.6048 32.9608 19.6048 32.9608C19.6048 32.9608 39.0016 22.0713 39.0016 11.1819C39.0016 5.19272 34.2406 0.29248 28.4215 0.29248Z" fill="#E31616"/>
                                </g>
                                <defs>
                                    <filter id="filter0_i_560_201" x="0.208008" y="0.29248" width="38.7939" height="40.8353" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="8.16707"/>
                                        <feGaussianBlur stdDeviation="4.08353"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_560_201"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='hidden col-span-2 lg:flex mt-[5%] items-center'>
                    <h4 className='font-[SatoshiVariable] text-xl mr-[3%]'>See upcoming drops</h4>
                    <div className="rounded-full shrink-0 grow-0 border-[0.5px] border-[#616161] aspect-square w-[7%] flex justify-center items-center hover:cursor-pointer" >
                        <svg className="scale-[.5] lg:scale-[.9]" width="40" height="26" viewBox="0 0 40 26" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#616161"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='lg:h-[22vh]'></div>
        </div>
    )
}