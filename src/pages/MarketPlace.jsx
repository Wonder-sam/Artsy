import React, { Component } from 'react'
import SideNav from '../components/SideNav';
import { MarketData } from '../dataset/marketData';
export class Marketplace extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className='flex'>
                <div className='w-[20%] pl-8 xl:pl-16 overflow-hidden box-content'>
                    <SideNav />
                </div>
                <div className='w-[80%] flex items-center flex-col'>
                    <div className='w-[80%] h-12 flex justify-around items-center shadow-[4px_4px_64px_rgba(0,0,0,0.1)] mb-11'>
                        <h4 className='w-[70%] font-[SatoshiRegular] text-base'>See 1-6 of 15 results</h4>
                        <select name='sort' className="outline outline-1 border-r-[16px] border-transparent rounded-md h-8 w-[18%] text-center">
                            <option className='font-[SatoshiVariable]'>Sort by</option>
                            <option>Price</option>
                            <option>Artist</option>
                        </select>
                    </div>
                    <div className='w-[80%] grid grid-cols-3 gap-5 gap-y-16'>
                        {
                            MarketData.map((product,index)=>(
                                <div className='relative flex-col text-[#333333]' key={product.id}>
                                    <img src={product.image} className="object-cover w-[17vw] h-[20vw] rounded-lg mb-2"/>
                                    <h4 className='font-[SatoshiRegular] text-base uppercase mb-4'>{product.name}</h4>
                                    <h4 className='font-[SatoshiBold] text-lg uppercase'>${parseFloat(product.price).toFixed(2)}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}