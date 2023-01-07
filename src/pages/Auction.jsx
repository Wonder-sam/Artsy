import React from 'react'
import { Link } from 'react-router-dom';
import { auctionData, topBids } from '../dataset/auctionData'

export default function Auction() {

    const [updateLike, setUpdateLike] = React.useState(false);

    const manageLike =(num) =>{
        topBids[num].liked = !topBids[num].liked
        setUpdateLike(!updateLike)
    }

    return(
        <div className='w-full flex flex-col items-center pb-16'>
            <h4 className='w-[85%] font-[SatoshiVariable] text-lg mb-8 lg:mb-20'>Here's an overview of products actively on auction, explore!</h4>

            {/* ---------------------------------------------------------Auction Overview------------------------------------------------------------------- */}

            <div className='ml-[7.5%] w-[99%] lg:w-[92.5%] flex flex-row flex-nowrap overflow-scroll scrollbar-hide mb-16'>
                {
                    auctionData.map((auction, index)=>{
                        let d = Math.floor((new Date(auction.end)- new Date(auction.start))/(1000*60*60*24))
                        let dr = Math.floor((new Date(auction.end)- new Date(auction.start))%(1000*60*60*24))
                        let h = Math.floor((dr)/(1000*60*60))
                        let hr = Math.floor((dr)%(1000*60*60))
                        let m = Math.floor((hr)/(1000*60))
                        let mr = Math.floor((hr)%(1000*60))
                        let s = Math.floor((mr)/(1000))
                        return <div key={auction.id} className="hover:scale-[.9] shrink-0 relative mr-4 w-[60%] lg:w-[35%] h-[55vw] lg:h-[25vw] group rounded-3xl flex flex-row overflow-hidden">
                            <div className='w-full h-[55vw] lg:h-[25vw]'>
                                <img src={auction.image} alt="" className='w-[100%] -mt-[2%] h-[60vw] lg:h-[30vw] object-cover'/>
                                <h4 className='z-20 w-[80%] rounded-xl absolute font-[STIXTwoTextMedium] text-xl lg:text-3xl text-[#ffffff] text-center bottom-[10%] left-[50%] -translate-x-[50%] px-[5%] py-[2%] bg-[rgba(245,244,244,0.24)] border border-[#ffffff]'>
                                    {d===0?"":d+"Days"} 
                                    {h===0?"":h+"hr : "} 
                                    {m+"mins : "}
                                    {s+"s"}
                                </h4>
                            </div>
                            <Link to={`${auction.id}`}className='hidden absolute z-10 top-0 w-full h-full bg-[rgba(0,0,0,0.7)] group-hover:flex rounded-xl justify-center items-center'>
                                <h4 className="shrink-0 grow-0 font-[SatoshiRegular] text-xl lg:text-3xl text-[#FFFFFF] mr-6">
                                Join livestream
                                </h4>
                                <div className="rounded-full shrink-0 grow-0 border-[0.5px] border-[#FFFFFF] aspect-square w-[15%] flex justify-center items-center hover:cursor-pointer" >
                                    <svg className="scale-[.5] lg:scale-[.9]" width="40" height="26" viewBox="0 0 40 26" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>

            {/* -----------------------------------------------------------------------Top Bids--------------------------------------------------------------------------------------- */}

            <h4 className="font-[SatoshiBold] text-xl w-[85%] mb-8 lg:mb-12">Top bids from popular creators</h4>
            <div className='w-[95%] lg:w-[85%] grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 ml-auto mr-auto'>
                {
                    topBids.map((bid,index)=>(
                        <div className='w-full' key={bid.id}>
                            <div className='rounded-xl shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] py-4'>
                                <div className='hover:cursor-pointer float-right mr-4 flex justify-center items-center mb-4 border border-[#000000] aspect-square w-[10%] rounded-full'>
                                    {
                                        bid.liked?
                                        <svg className='scale-[.6] xl:scale-[.8]' onClick={()=>manageLike(index)} width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 0C20.85 0 18.075 1.575 16.5 4.05C14.925 1.575 12.15 0 9 0C4.05 0 0 4.05 0 9C0 17.925 16.5 27 16.5 27C16.5 27 33 18 33 9C33 4.05 28.95 0 24 0Z" fill="#F44336"/>
                                        </svg>
                                        :
                                        <svg className='scale-[.6] xl:scale-[.8]' onClick={()=>manageLike(index)} width="33" height="27" viewBox="0 0 33 27" fill="none">
                                            <path d="M24 0C20.85 0 18.075 1.575 16.5 4.05C14.925 1.575 12.15 0 9 0C4.05 0 0 4.05 0 9C0 17.925 16.5 27 16.5 27C16.5 27 33 18 33 9C33 4.05 28.95 0 24 0Z" fill="#DDBAB7"/>
                                        </svg>
                                    } 
                                </div>
                                <img src={bid.image} className="w-full object-cover" alt=""/>
                                <h4 className='font-[SatoshiBold] text-2xl ml-4 mt-4'>{bid.name}</h4>
                            </div>
                            <div className='grid grid-cols-2 mt-8 text-xl -gap-x-8 gap-y-5'>
                                <h4 className='font-[SatoshiVariable] text-[#616161] w-[70%]'>Creator:</h4>
                                <h4 className='font-[SatoshiBold]'>{bid.creator}</h4>
                                <h4 className='font-[SatoshiVariable] text-[#616161]'>Date:</h4>
                                <h4 className='font-[SatoshiBold]'>{bid.date}</h4>
                                <h4 className='font-[SatoshiVariable] text-[#616161]'>Highest bid:</h4>
                                <h4 className='font-[SatoshiBold]'>{bid.highBid} ETH</h4>
                                <div className='col-span-2 bg-[#F6F4F4] grid grid-cols-2 p-4 rounded-lg'>
                                    <div>
                                        <h4 className='font-[SatoshiBold] text-[#616161] mb-4'>Current bid</h4>
                                        <h4 className='font-[SatoshiBold]'>{bid.currBid} ETH</h4>
                                    </div>
                                    <button className='justify-items-center self-center w-[90%] h-[80%] font-[SatoshiRegular] bg-[#3341C1] text-[#ffffff]'>
                                        Place bid
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}