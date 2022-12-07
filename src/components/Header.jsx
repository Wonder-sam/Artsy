import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import search from './../assets/images/search.svg'
import cart from './../assets/images/cart.svg'
import alert from './../assets/images/alert.svg'

export default function Header() {
    const activeClassName = "underline font-[SatoshiVariable] underline-offset-8"
    return(
        <><div className="w-full flex justify-around items-center py-[2.2rem]">
            <h4 className="w-[20%] text-center font-[STIXTwoTextBold] uppercase text-[3vw]">Artsy.</h4>
            <div className="w-[45%]">
                <ul className="flex font-[SatoshiRegular] text-[2vw] justify-evenly">
                    <li><NavLink to="Home" className={({isActive})=>isActive? activeClassName: undefined}>Home</NavLink></li>
                    <li><NavLink to="Marketplace" className={({isActive})=>isActive? activeClassName: undefined}>Marketplace</NavLink></li>
                    <li><NavLink to="Auctions" className={({isActive})=>isActive? activeClassName: undefined}>Auctions</NavLink></li>
                    <li><NavLink to="Drops" className={({isActive})=>isActive? activeClassName: undefined}>Drop</NavLink></li>
                </ul>
            </div>
            <div className=" w-[15%] flex justify-evenly">
                <img alt="" src={search} className="w-[15%]" />
                <img alt="" src={cart} className="w-[15%]" />
                <img alt="" src={alert} className="w-[15%]" />
            </div>
        </div>
        <Outlet />
        </>
    )
}