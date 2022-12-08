import React from 'react'
import boy from './../assets/images/boy.svg'
import leaf from './../assets/images/leaf.svg'
import girl from './../assets/images/girl.svg'
import kangaroo from './../assets/images/kangaroo.svg'
import berry from './../assets/images/berry.svg'
import { DisplayProducts } from './../dataset/productsData';
import showroom from './../assets/images/showroom.svg'
import girlclip from './../assets/images/girlclip.svg'
import smile from './../assets/images/smile.svg'
import flower from './../assets/images/flower.svg'
import whitedress from './../assets/images/whitedress.svg'
import manbeard from './../assets/images/manbeard.svg'
import mandown from './../assets/images/mandown.svg'

export default function Home() {
    React.useEffect(()=>{
        var carousel = document.querySelectorAll('.carousel');
        carousel.item(1).querySelectorAll('.leaf').item(0).scrollIntoView();
        carousel.item(2).querySelectorAll('.girl').item(0).scrollIntoView();
        carousel.item(3).querySelectorAll('.kangaroo').item(0).scrollIntoView();
        carousel.item(4).querySelectorAll('.berry').item(0).scrollIntoView();
        for(let i=0; i<carousel.length; i++){
        carousel.item(i).classList.add("scroll-smooth")
        }
        var pos = 0;
        var cos = 0;
        var onelefts = []
        var twolefts = []
        var images = document.querySelectorAll('.fadeImage');
        var cimg = document.querySelectorAll('.onecarouselImg');
        var timg = document.querySelectorAll('.twocarouselImg');

        for(let c=0; c<timg.length; c++){
        onelefts.push(cimg.item(c).offsetLeft)
        twolefts.push(timg.item(c).offsetLeft)
        }
        // let top = img.offsetLeft;
    
        
        setInterval(()=>{
        carousel.item(0).scrollLeft = onelefts[(cos)%5];
        carousel.item(1).scrollLeft = twolefts[(cos+1)%5];
        carousel.item(2).scrollLeft = twolefts[(cos+2)%5];
        carousel.item(3).scrollLeft = twolefts[(cos+3)%5];
        carousel.item(4).scrollLeft = twolefts[(cos+4)%5];
        cos++
        }, 2000)

        setInterval(()=>{
            
            for(let c=0; c<images.length; c++){
            images.item(c).classList.replace('animate-fadeIn', 'animate-fadeOut')
            images.item(c).classList.add('opacity-0')
            }
            images.item(pos).classList.replace('animate-fadeOut', 'animate-fadeIn')
            images.item(pos).classList.remove('opacity-0')
            pos++
            pos=pos%3
            
        }, 4000)
    })

    return (
        <div>
            <div className="w-full">
                <h1 className='container mx-auto text-[7vw] sm:text-[5vw] mb-4 font-[ClashDisplaySemiBold] text-center text-[#333333] leading-relaxed'>
                    Photography is poetry <span className='hidden sm:inline'>&</span><span className='sm:hidden'>and</span><br/> beautiful untold stories
                </h1>
                <div className='relative mb-4 sm:mb-0'>
                    <h5 className='container mx-auto w-[85%] sm:w-[50%] text-[#292929] text-center font-[SatoshiVariable]'>
                        Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place.
                        Register to get top access.
                    </h5>
                </div>
            </div>
            <div className='w-full hidden sm:flex h-96 overflow-hidden flex flex-row flex-nowrap mb-32 justify-start' >
                <div className="carousel w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 -ml-16 mt-24">
                <img src={boy} className="onecarouselImg inline-block mr-4" alt="" />
                <img src={leaf} className="onecarouselImg inline-block mr-4" alt=""/>
                <img src={girl} className="onecarouselImg inline-block mr-4" alt=""/>
                <img src={kangaroo} className="onecarouselImg inline-block mr-4" alt=""/>
                <img src={berry} className="onecarouselImg inline-block mr-4" alt=""/>
                </div>
                <div className="carousel relative w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-16">
                <img src={boy} className="twocarouselImg inline-block  mr-4" alt=""/>
                <img src={leaf} className="twocarouselImg inline-block mr-4 leaf" alt=""/>
                <img src={girl} className="twocarouselImg inline-block mr-4" alt=""/>
                <img src={kangaroo} className="twocarouselImg inline-block mr-4" alt=""/>
                <img src={berry} className="twocarouselImg inline-block mr-4" alt=""/>
                </div>
                <div className="carousel relative w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-8">
                <img src={boy} className="threecarouselImg inline-block mr-4" alt=""/>
                <img src={leaf} className="threecarouselImg inline-block mr-4" alt=""/>
                <img src={girl} className="threecarouselImg inline-block mr-4 girl" alt=""/>
                <img src={kangaroo} className="threecarouselImg inline-block mr-4" alt=""/>
                <img src={berry} className="threecarouselImg inline-block mr-4"  alt=""/>
                </div>
                <div className="carousel relative w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-16">
                <img src={boy} className="fourcarouselImg inline-block mr-4" alt=""/>
                <img src={leaf} className="fourcarouselImg inline-block mr-4" alt=""/>
                <img src={girl} className="fourcarouselImg inline-block mr-4" alt=""/>
                <img src={kangaroo} className="fourcarouselImg inline-block mr-4 kangaroo" alt=""/>
                <img src={berry} className="fourcarouselImg inline-block mr-4" alt=""/>
                </div>
                <div className="carousel relative w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-[4.25rem]">
                <img src={boy} className="fivecarouselImg inline-block mr-4" alt=""/>
                <img src={leaf} className="fivecarouselImg inline-block mr-4" alt=""/>
                <img src={girl} className="fivecarouselImg inline-block mr-4" alt=""/>
                <img src={kangaroo} className="fivecarouselImg inline-block mr-4" alt=""/>
                <img src={berry} className="fivecarouselImg inline-block mr-4 berry" alt=""/>
                </div>
            </div>
            <div className='w-full sm:hidden h-[23rem] mb-4 sm:mb-0 relative box-border'>
                <img src={smile} className='object-contain w-[95%] h-[95%] object-center aspect-square absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-45%]' alt="flower"/>
                <img src={flower} className='object-contain w-[95%] h-[95%] object-center aspect-square absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-45%]' alt="flower"/>
                <img src={whitedress} className='object-contain w-[90%] h-[90%] object-center aspect-square absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-45%]' alt="flower"/>
            </div>
            <div className='sm:container sm:mx-auto w-[95%] ml-[5%] sm:w-4/5 mb-24 md:mb-48'>
                <div className='w-full sm:border-b-4 sm:py-8'>
                <h4 className='font-[SatoshiVariable] text-[6.8vw] sm:text-4xl text-[#333333]'>
                    Featured products
                </h4>
                </div>
            {
                DisplayProducts.map((product, index)=>(
                    <div className='w-full flex flex-col sm:flex-row pt-4 sm:py-16 last: border-b border-[#333333] justify-between' key={index}>
                        <div className='w-[100%] sm:w-1/2'>
                        {
                            index%2===0?
                            <div className='relative group'>
                            <img src={product.image} alt={product.productName} className="object-cover w-[100%] h-[15rem]" />
                            <div className='absolute sm:hidden sm:group-hover:flex top-0 w-full h-full bg-[rgba(51,51,51,0.7)] flex-wrap flex flex-row justify-center items-center'>
                                <h4 className='sm:hidden font-[ClashDisplaySemiBold] basis-[90vw] text-center text-[#FFFFFF] text-[6vw]'>{product.productName}</h4>
                                <h4 className="invisible sm:visible font-[SatoshiRegular] text-3xl text-[#FFFFFF] mr-6">
                                View product
                                </h4>
                                <div className="rounded-full border-[0.5px] border-[#FFFFFF] aspect-square w-[15%] flex justify-center items-center hover:cursor-pointer" >
                                <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#FFFFFF"/>
                                </svg>
                                </div>
                            </div>
                            </div>
                            :
                            <div className='w-[100%] sm:w-[90%] hidden sm:block'>
                            <h4 className='font-[STIXTwoTextBold] text-[3.1vw] text-[#333333] mb-6  hidden sm:block'>{product.productName}</h4>
                            <h5 className='font-[SatoshiRegular] text-[#333333] h-[8rem] sm:mb-6'>{product.description}</h5>
                            <div className='w-[90%] flex flex-row  items-center'>
                                <div className='w-[85%] relative flex flex-row items-center'>
                                {
                                    product.creators.map((creator, cindex)=>(
                                    <div key={cindex} className="w-[15%] sm:w-[12%] relative [&:nth-of-type(2)]:-ml-[20px] [&:nth-of-type(3)]:-ml-[20px] 
                                    [&:nth-of-type(4)]:-ml-[20px] [&:nth-of-type(5)]:-ml-[20px] ">
                                        <img src={creator.image} alt="creator"/>
                                    </div>
                                    ))
                                }
                                
                                <h4 className="font-[SatoshiVariable] text-base text-[#333333] ml-2">{product.creators.length} major creators</h4>
                                </div>
                                <div className="hidden rounded-full border-[0.5px] border-[#333333] aspect-square w-[15%] sm:flex justify-center items-center cursor-pointer" >
                                <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#616161"/>
                                </svg>
                                </div>
                            </div>
                            </div>
                        }
                        </div>
                        <div className='w-[100%] sm:w-1/2'>
                        {
                            index%2===0?
                            <div className='w-[100%] sm:w-[90%] flex flex-col sm:items-end'>
                            <h4 className='font-[STIXTwoTextBold] text-[3.1vw] text-[#333333] mb-6 w-[90%] hidden sm:block'>{product.productName}</h4>
                            <h5 className='font-[SatoshiRegular] text-[#333333] w-[90%] h-[8rem] sm:mb-6'>{product.description}</h5>
                            <div className='w-[90%] flex flex-row items-center justify-between mb-4'>
                                <div className='w-[85%] relative flex flex-row items-center'>
                                {
                                    product.creators.map((creator, cindex)=>(
                                    <div key={cindex} className="w-[15%] sm:w-[12%] relative [&:nth-of-type(2)]:-ml-[20px] [&:nth-of-type(3)]:-ml-[20px] 
                                    [&:nth-of-type(4)]:-ml-[20px] [&:nth-of-type(5)]:-ml-[20px] ">
                                        <img src={creator.image} alt="creator" />
                                    </div>
                                    ))
                                }
                                <h4 className="font-[SatoshiVariable] text-base text-[#333333] ml-2">{product.creators.length} major creators</h4>
                                </div>
                                <div className="hidden rounded-full border-[0.5px] border-[#333333] aspect-square w-[15%] sm:flex justify-center items-center cursor-pointer" >
                                <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#616161"/>
                                </svg>
                                </div>
                            </div>
                            </div>
                            :
                            <><div className='flex flex-col sm:flex-row justify-end relative group' >
                            <img src={product.image} alt={product.productName} className="object-cover right-0 w-[100%] h-[15rem]" />
                            <div className='absolute sm:hidden sm:group-hover:flex top-0 w-full h-full bg-[rgba(51,51,51,0.7)] flex flex-wrap flex-row justify-center items-center'>
                            <h4 className='sm:hidden font-[ClashDisplaySemiBold] basis-[90vw] text-center text-[#FFFFFF] text-[6vw]'>{product.productName}</h4>
                                <h4 className="invisible sm:visible font-[SatoshiRegular] text-3xl text-[#FFFFFF] mr-6">
                                View product
                                </h4>
                                <div className="rounded-full border-[0.5px] border-[#FFFFFF] aspect-square w-[15%] flex justify-center items-center hover:cursor-pointer" >
                                <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#FFFFFF"/>
                                </svg>
                                </div>
                            </div>
                            </div>
                            <div className='w-[100%] sm:w-[90%] sm:hidden'>
                            <h4 className='font-[STIXTwoTextBold] text-[3.1vw] text-[#333333] mb-6  hidden sm:block'>{product.productName}</h4>
                            <h5 className='font-[SatoshiRegular] text-[#333333] h-[8rem]'>{product.description}</h5>
                            <div className='w-[90%] flex flex-row items-center mb-4'>
                                <div className='w-[85%] relative flex flex-row items-center'>
                                {
                                    product.creators.map((creator, cindex)=>(
                                    <div key={cindex} className="w-[15%] sm:w-[12%] relative [&:nth-of-type(2)]:-ml-[20px] [&:nth-of-type(3)]:-ml-[20px] 
                                    [&:nth-of-type(4)]:-ml-[20px] [&:nth-of-type(5)]:-ml-[20px] ">
                                        <img src={creator.image} alt="creator"/>
                                    </div>
                                    ))
                                }
                                
                                <h4 className="font-[SatoshiVariable] text-base text-[#333333] ml-2">{product.creators.length} major creators</h4>
                                </div>
                                <div className="hidden rounded-full border-[0.5px] border-[#333333] aspect-square w-[15%] sm:flex justify-center items-center cursor-pointer" >
                                <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#616161"/>
                                </svg>
                                </div>
                            </div>
                            </div></>
                        }
                        </div>
                    </div>
                    )
                )
            }
            </div>
            <div className='flex flex-col items-center w-full bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[rgba(192,86,9,0.49)] mb-24 md:mb-44'>
                <h4 className='hidden md:block self-start ml-[7.5%] font-[SatoshiVariable] text-3xl text-[#FFFFFF] py-4 my-4 border-b'>See Upcoming Auctions and Exhibitions</h4>
                <div className='w-[100%] md:w-[85%] relative flex justify-center p-8 md:p-0'>
                    <img src={showroom} alt="" className='object-cover md:object-contain w-full h-[70vw] md:h-auto' />
                    <div className='absolute w-[80%] md:w-[90%] md:bottom-8 md:left-8 md:top-auto md:translate-x-0 md:translate-y-0 md:translate-y-none text-[#FFFFFF] flex items-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h4 className='text-[10vw] md:text-[6vw] -mt-12 m md:-mt-8 mr-1'>01</h4>
                        <div>
                            <ul className='list-disc list-outside w-[60.5vw] md:w-[40vw]'>
                                <li className='text-[5vw] md:text-[3vw]'>MONALISA REDEFINED IN STYLE.</li>
                            </ul>
                            <h5 className='text-[2.5vw] leading-[400%] uppercase'>Start on : 08:00 GTS . Monday </h5>
                            <div className='flex flex-col md:flex-row justify-between'>
                                <h4 className='text-[2.3vw] md:text-[1.5vw] md:w-[90%] font-[SatoshiRegular] tracking-[0.065rem]'>
                                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                                </h4>
                                <div className='md:w-[55%] mt-4 ml-20 md:ml-2'>
                                    <a href="market" className='inline-block p-2 font-[SatoshiRegular] underline text-[3vw] md:text-[2vw] underline-offset-4 cursor-pointer'>See more</a>
                                    <button className='inline-block p-2 font-[SatoshiRegular] border text-[3vw] md:text-[2vw] rounded-lg border-[#FFFFFF]'>Set a reminder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex justify-between w-[85%] items-center hidden'>
                    <div className='relative w-[40%] bg-[#AEAEAE] h-[1rem] rounded-full overflow-hidden'>
                        <div className='absolute bg-[#FFFFFF] w-[20%] h-full'></div>
                    </div>
                    <div className='flex'>
                        <div className='cursor-pointer aspect-square w-[3.5rem] flex items-center justify-center rounded-full border border-[#FFFFFF] my-8 mr-4 shadow-[6.7px_6.7px_6.6px_rgba(0,0,0,0.15)]'>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z" fill="white"/>
                            </svg>
                        </div>
                        <div className='cursor-pointer aspect-square w-[3.5rem] flex items-center justify-center rounded-full border border-[#FFFFFF] my-8 shadow-[6.7px_6.7px_6.6px_rgba(0,0,0,0.15)]'>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91505 5.85521L0.0687256 2.00888L1.16745 0.910156L6.11251 5.85521L1.16745 10.8003L0.0687256 9.70153L3.91505 5.85521Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between px-4 md:px-8 py-4 md:py-8 border-y border-[#333333]'>
                <h4 className="text-[6vw] font-[SatoshiVariable] text=[#333333]">Explore marketplace</h4>
                <svg width="51" height="41" viewBox="0 0 81 71" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden md:block'>
                    <path d="M41.9839 1.48617C42.9332 0.534578 44.2207 0 45.5631 0C46.9055 0 48.193 0.534578 49.1423 1.48617L79.5178 31.9419C80.4668 32.8938 81 34.1847 81 35.5306C81 36.8766 80.4668 38.1675 79.5178 39.1193L49.1423 69.5751C48.1875 70.4997 46.9087 71.0114 45.5813 70.9998C44.2539 70.9882 42.9842 70.4544 42.0455 69.5133C41.1069 68.5722 40.5745 67.299 40.5629 65.9681C40.5514 64.6372 41.0617 63.355 41.9839 62.3977L63.7175 40.6066H5.06257C3.71989 40.6066 2.43221 40.0718 1.48279 39.1199C0.533377 38.168 0 36.8769 0 35.5306C0 34.1844 0.533377 32.8933 1.48279 31.9414C2.43221 30.9895 3.71989 30.4547 5.06257 30.4547H63.7175L41.9839 8.66358C41.0348 7.7117 40.5016 6.42084 40.5016 5.07488C40.5016 3.72891 41.0348 2.43806 41.9839 1.48617Z" fill="#4693ED"/>
                </svg>
                <div className='aspect-square rounded-full border border-[#333333] p-2 flex items-center md:hidden'>
                    <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#333333"/>
                    </svg>
                </div>
            </div>
            <div className='flex items-center justify-between px-4 md:px-8 py-4 md:py-8 border-b mb-24 md:mb-44 border-[#333333]'>
                <h4 className="text-[6vw] font-[SatoshiVariable] text=[#333333]">See autions</h4>
                <svg width="51" height="41" viewBox="0 0 81 71" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden md:block'>
                    <path d="M41.9839 1.48617C42.9332 0.534578 44.2207 0 45.5631 0C46.9055 0 48.193 0.534578 49.1423 1.48617L79.5178 31.9419C80.4668 32.8938 81 34.1847 81 35.5306C81 36.8766 80.4668 38.1675 79.5178 39.1193L49.1423 69.5751C48.1875 70.4997 46.9087 71.0114 45.5813 70.9998C44.2539 70.9882 42.9842 70.4544 42.0455 69.5133C41.1069 68.5722 40.5745 67.299 40.5629 65.9681C40.5514 64.6372 41.0617 63.355 41.9839 62.3977L63.7175 40.6066H5.06257C3.71989 40.6066 2.43221 40.0718 1.48279 39.1199C0.533377 38.168 0 36.8769 0 35.5306C0 34.1844 0.533377 32.8933 1.48279 31.9414C2.43221 30.9895 3.71989 30.4547 5.06257 30.4547H63.7175L41.9839 8.66358C41.0348 7.7117 40.5016 6.42084 40.5016 5.07488C40.5016 3.72891 41.0348 2.43806 41.9839 1.48617Z" fill="#4693ED"/>
                </svg>
                <div className='aspect-square rounded-full border border-[#333333] p-2 flex items-center md:hidden'>
                    <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#333333"/>
                    </svg>
                </div>
            </div>
            <div className='bg-[#E2E2E2] flex flex-col relative w-full mb-24 xl:mb-44'>
                <h4 className='font-[ClashDisplaySemiBold] text-[7vw] xl:text-[5vw] ml-2 md:ml-4 xl:ml-[6%] mt-4 md:mt-[3rem] text-[#161616]'>
                    TOP CREATORS OF<br/>THE WEEK
                </h4>

                <h4 className='font-[ClashDisplayLight] text-[4vw] lg:text-[2vw] xl:text-[2vw] w-[95%] lg:w-[90%] text-[#000000] mt-8 md:mt-32 self-center'>
                    “Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people 
                    in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than 
                    with colour photography. Everything looks more exciting.”– Jack Lowden
                </h4>
                <div className="w-full relative mb-24 md:mb-44">
                    <span className='font-[ClashDisplaySemiBold] text-8xl text-[#000000] line-through absolute right-2 lg:right-32'>1985</span>
                </div>
                <div className='absolute md:h-[26%] top-0 md:top-[3rem] right-0 md:right-20 flex'>
                    <div className='h-[100%] bg-[#292929] w-[0.5rem] md:block hidden mr-4 rounded-full overflow-hidden'>
                        <div className='h-[80%] bg-[#AEAEAE]'></div>
                    </div>
                    <ul className='text-[3vw] xl:text-[2vw] font-[ClashDisplayRegular] w-[80vw] list-disc md:list-none md:w-auto leading-loose flex justify-evenly items-center md:block'>
                        <li>Editorials</li>
                        <li>Fashion</li>
                        <li>Lifestyle</li>
                        <li>Blueprint</li>
                    </ul>
                </div>
                <img src={girlclip} alt="" className='fadeImage transition-opacity duration-[3000ms] absolute w-[80vw] lg:w-[50vw] xl:w-[45vw] -bottom-10 right-4 lg:right-[10%] xl:right-[13%] '/>
                <img src={mandown} alt="" className='fadeImage transition-opacity duration-[2000ms] opacity-0 absolute w-[80vw] lg:w-[50vw] xl:w-[45vw] -bottom-10 right-4 lg:right-[10%] xl:right-[13%] '/>
                <img src={manbeard} alt="" className='fadeImage transition-opacity duration-[3000ms] opacity-0 absolute w-[80vw] lg:w-[50vw] xl:w-[45vw] -bottom-10 right-4 lg:right-[10%] xl:right-[13%] '/>
            </div>
            
            <div className='w-full flex flex-col md:items-center text-[#333333]'>
                <div className='w-full md:w-[90%] md:border border-[#333333] flex flex-col justify-center px-4 md:px-0 md:items-center py-8 leading-loose'>
                    <h4 className='uppercase text-[6vw] md:text-[2.3vw]'>Newletter</h4>
                    <h5 className='font-[SatoshiRegular] hidden md:block md:text-[1.8vw]'>Subscribe to get daily updates on new drops & exciting deals</h5>
                    <h5 className='font-[SatoshiRegular] text-[3vw] uppercase md:hidden'>Subscribe to our daily updates and news letters</h5>
                    <div className='py-4'>
                        <input type="name" placeholder='Enter your email' className='placeholder:text-[#333333] placeholder:font-[SatoshiRegular] placeholder:pl-16 placeholder:uppercase border border-[#333333] w-[90%] md:w-[35vw] h-[3rem] md:inline-block' />
                        <button className='block md:inline-block bg-[#333333] text-[#FFFFFF] h-[3rem] w-[50%] md:w-[17vw] uppercase md:ml-4 mt-8 md:mt-0'>
                        Subscribe
                        </button>
                    </div>
                </div>
                <div className='flex flex-row ml-4 md:ml-0 md:justify-around md:items-center w-full md:mt-8 mb-16'>
                    <h4 className='font-[ClashDisplayBold] uppercase text-right text-[1.5rem] lg:text-[3rem] w-[15%] lg:w-[25%] hidden md:block'>Artsy.</h4>
                    <ul className='font-[SatoshiRegular] text-xl xl:text-2xl w-[15%] md:leading-[3rem] xl:leading-[4rem] hidden md:block'>
                        <li>Home</li>
                        <li>Marketplace</li>
                        <li>Auction</li>
                        <li>Drops</li>
                    </ul>
                    <ul className='font-[SatoshiRegular] text-xl xl:text-2xl w-[15%] md:leading-[3rem] xl:leading-[4rem] hidden md:block'>
                        <li>Blog</li>
                        <li>Wallets</li>
                        <li>Rates</li>
                        <li>High bids</li>
                    </ul>
                    <ul className='font-[SatoshiRegular] text-xl md:w-[32%] lg:w-[25%] md:leading-[3rem] xl:leading-[4rem] whitespace-nowrap'>
                        <li className='md:hidden uppercase'>Reach Us</li>
                        <li className='overflow-hidden text-ellipsis'>
                            <span>
                                <svg width="41" height="34" viewBox="0 0 41 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline w-[10%] mr-2'>
                                    <path d="M2.05 0H38.95C39.4937 0 40.0151 0.199007 40.3996 0.553243C40.784 0.907478 41 1.38792 41 1.88889V32.1111C41 32.6121 40.784 33.0925 40.3996 33.4468C40.0151 33.801 39.4937 34 38.95 34H2.05C1.50631 34 0.984881 33.801 0.600431 33.4468C0.215981 33.0925 0 32.6121 0 32.1111V1.88889C0 1.38792 0.215981 0.907478 0.600431 0.553243C0.984881 0.199007 1.50631 0 2.05 0ZM36.9 8.00511L20.6476 21.4162L4.1 7.96356V30.2222H36.9V8.00511ZM5.14755 3.77778L20.625 16.3616L35.8791 3.77778H5.14755Z" fill="#333333"/>
                                </svg>
                            </span>
                            <span className='text-ellipsis'>
                                artsystudios@gmail.com
                            </span>
                        </li>
                        <li>
                            <span>
                                <svg width="41" height="58" viewBox="0 0 41 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline w-[9%] mr-2'>
                                <path d="M20.5 58L6.00423 41.0121C3.13728 37.6522 1.18487 33.3715 0.393892 28.7112C-0.397084 24.0509 0.00889892 19.2204 1.5605 14.8306C3.11211 10.4407 5.73964 6.68864 9.11084 4.04882C12.482 1.409 16.4455 0 20.5 0C24.5545 0 28.518 1.409 31.8892 4.04882C35.2604 6.68864 37.8879 10.4407 39.4395 14.8306C40.9911 19.2204 41.3971 24.0509 40.6061 28.7112C39.8151 33.3715 37.8627 37.6522 34.9958 41.0121L20.5 58ZM31.775 37.2376C34.0047 34.6243 35.5231 31.2948 36.1382 27.6702C36.7533 24.0456 36.4374 20.2886 35.2306 16.8744C34.0237 13.4602 31.9801 10.542 29.3581 8.48886C26.7361 6.43574 23.6534 5.33989 20.5 5.33989C17.3466 5.33989 14.2639 6.43574 11.6419 8.48886C9.0199 10.542 6.97626 13.4602 5.76942 16.8744C4.56257 20.2886 4.24672 24.0456 4.86181 27.6702C5.4769 31.2948 6.9953 34.6243 9.22501 37.2376L20.5 50.451L31.775 37.2376ZM20.5 29.3629C19.2918 29.3629 18.1331 28.8005 17.2787 27.7992C16.4244 26.798 15.9444 25.4401 15.9444 24.0242C15.9444 22.6083 16.4244 21.2503 17.2787 20.2491C18.1331 19.2479 19.2918 18.6854 20.5 18.6854C21.7082 18.6854 22.8669 19.2479 23.7213 20.2491C24.5756 21.2503 25.0556 22.6083 25.0556 24.0242C25.0556 25.4401 24.5756 26.798 23.7213 27.7992C22.8669 28.8005 21.7082 29.3629 20.5 29.3629Z" fill="#333333"/>
                                </svg>
                            </span>
                            <span>
                                Lagos, Nigeria.
                            </span>
                        </li>
                        <li className='hidden md:block md:invisible'>Blank</li>
                        <li className='hidden md:block md:invisible'>Blank</li>
                    </ul>
                </div>
                <h4 className='text-[rgba(51,51,51,.5)] text-base mb-16 text-center'>Artsystudios © 2022. All Rights Reserved.</h4>
            </div>
        </div>
    )
}