import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import search from './../assets/images/search.svg'
import cart from './../assets/images/cart.svg'
import alert from './../assets/images/alert.svg'
import menu from './../assets/images/menu.svg'

export default function Header() {
    const activeClassName = "underline font-[SatoshiVariable] underline-offset-8"
    const mobileActiveClassName = "text-[#3341C1] font-[SatoshiVariable]"

   const closeMenu =()=>{
    document.getElementById("Menu").classList.add('hidden')
   }
   const openMenu =()=>{
    document.getElementById("Menu").classList.remove('hidden')
   }

    return(
        <><div className="w-full flex justify-evenly md:justify-around items-center py-[2.2rem]">
            <div className="w-[25%] flex pl-4 md:hidden"><img alt="" src={menu} className="w-[30%] sm:w-[20%] text-xl" onClick={()=>openMenu()} /></div>
            <h4 className="w-[50%] md:w-[20%] text-center font-[STIXTwoTextBold] uppercase text-3xl sm:text-4xl md:text-[3vw] text-[#333333]">Artsy.</h4>
            <div className="w-[45%] hidden md:block">
                <ul className="flex font-[SatoshiRegular] text-[2vw] justify-evenly">
                    <li><NavLink to="Home" className={({isActive})=>isActive? activeClassName: undefined}>Home</NavLink></li>
                    <li><NavLink to="Marketplace" className={({isActive})=>isActive? activeClassName: undefined}>Marketplace</NavLink></li>
                    <li><NavLink to="Auctions" className={({isActive})=>isActive? activeClassName: undefined}>Auctions</NavLink></li>
                    <li><NavLink to="Drops" className={({isActive})=>isActive? activeClassName: undefined}>Drop</NavLink></li>
                </ul>
            </div>
            <div className="w-[25%] md:w-[15%] flex justify-evenly">
                <img alt="" src={search} className="w-[20%] sm:w-[15%]" />
                <img alt="" src={cart} className="w-[20%] sm:w-[15%]" />
                <img alt="" src={alert} className="w-[20%] hidden md:block sm:w-[15%]" />
            </div>
        </div>
        <div id="Menu" className="pointer-events-none z-[2] fixed top-0 w-full left-0 bottom-0 hidden bg-[#FFFFFF] py-16 px-8">
            <div className="flex w-full justify-between mb-8">
                <h4 className="w-[80%] text-left font-[STIXTwoTextBold] uppercase text-3xl sm:text-4xl text-[#333333]">Artsy.</h4>
                <svg onClick={()=>closeMenu()} className="pointer-events-auto" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.317668 1.85151C0.216955 1.75079 0.137065 1.63123 0.0825594 1.49964C0.0280538 1.36805 1.06119e-09 1.22702 0 1.08459C-1.06119e-09 0.942158 0.0280538 0.801122 0.0825594 0.669534C0.137065 0.537946 0.216955 0.418381 0.317668 0.317668C0.418381 0.216955 0.537946 0.137065 0.669534 0.0825594C0.801122 0.0280538 0.942158 -1.06119e-09 1.08459 0C1.22702 1.06119e-09 1.36805 0.0280538 1.49964 0.0825594C1.63123 0.137065 1.75079 0.216955 1.85151 0.317668L13 11.4683L24.1485 0.317668C24.2492 0.216955 24.3688 0.137065 24.5004 0.0825594C24.6319 0.0280538 24.773 0 24.9154 0C25.0578 0 25.1989 0.0280538 25.3305 0.0825594C25.4621 0.137065 25.5816 0.216955 25.6823 0.317668C25.783 0.418381 25.8629 0.537946 25.9174 0.669534C25.9719 0.801122 26 0.942158 26 1.08459C26 1.22702 25.9719 1.36805 25.9174 1.49964C25.8629 1.63123 25.783 1.75079 25.6823 1.85151L14.5317 13L25.6823 24.1485C25.783 24.2492 25.8629 24.3688 25.9174 24.5004C25.9719 24.6319 26 24.773 26 24.9154C26 25.0578 25.9719 25.1989 25.9174 25.3305C25.8629 25.4621 25.783 25.5816 25.6823 25.6823C25.5816 25.783 25.4621 25.8629 25.3305 25.9174C25.1989 25.9719 25.0578 26 24.9154 26C24.773 26 24.6319 25.9719 24.5004 25.9174C24.3688 25.8629 24.2492 25.783 24.1485 25.6823L13 14.5317L1.85151 25.6823C1.75079 25.783 1.63123 25.8629 1.49964 25.9174C1.36805 25.9719 1.22702 26 1.08459 26C0.942158 26 0.801122 25.9719 0.669534 25.9174C0.537946 25.8629 0.418381 25.783 0.317668 25.6823C0.216955 25.5816 0.137065 25.4621 0.0825594 25.3305C0.0280538 25.1989 0 25.0578 0 24.9154C0 24.773 0.0280538 24.6319 0.0825594 24.5004C0.137065 24.3688 0.216955 24.2492 0.317668 24.1485L11.4683 13L0.317668 1.85151Z" fill="#333333"/>
                </svg>
            </div>
            <ul className="pointer-events-auto font-[SatoshiRegular] z-[2] text-2xl leading-[4rem]">
                <li onClick={()=>closeMenu()}><NavLink to="Home" className={({isActive})=>isActive? mobileActiveClassName: undefined}>Home</NavLink></li>
                <li onClick={()=>closeMenu()}><NavLink to="Marketplace" className={({isActive})=>isActive? mobileActiveClassName: undefined}>Marketplace</NavLink></li>
                <li onClick={()=>closeMenu()}><NavLink to="Auctions" className={({isActive})=>isActive? mobileActiveClassName: undefined}>Auctions</NavLink></li>
                <li onClick={()=>closeMenu()}><NavLink to="Drops" className={({isActive})=>isActive? mobileActiveClassName: undefined}>Drop</NavLink></li>
            </ul>
            <div className="flex justify-center items-center w-20 absolute bottom-10 right-10 rounded-full bg-[#3341C1] aspect-square">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 29V2.9C0 2.1025 0.2842 1.41955 0.8526 0.85115C1.42003 0.283716 2.1025 0 2.9 0H26.1C26.8975 0 27.5805 0.283716 28.1489 0.85115C28.7163 1.41955 29 2.1025 29 2.9V20.3C29 21.0975 28.7163 21.7805 28.1489 22.3489C27.5805 22.9163 26.8975 23.2 26.1 23.2H5.8L0 29Z" fill="white"/>
                </svg>
            </div>
        </div>
        <Outlet />
        </>
    )
}