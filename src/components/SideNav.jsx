import React from "react";
import MultiRangeSlider from 'multi-range-slider-react'
import "./../base.css"

export default function SideNav(){
    const [minValue, setMinValue] = React.useState(0);
    const [maxValue, setMaxValue] = React.useState(900);
    const handleRange=(val)=>{
        setMaxValue(val.maxValue)
        setMinValue(val.minValue)
    }

    const toggleCategory=(num)=>{
        let head = document.getElementsByClassName('menuBody').item(num)
        if(head.classList.contains('h-40')){
            head.classList.replace('h-40', 'h-0')
            document.getElementsByClassName('catArrow').item(0).classList.add('hidden')
            document.getElementsByClassName('catArrow').item(1).classList.remove('hidden')
        }
        else{
            head.classList.replace('h-0', 'h-40')
            document.getElementsByClassName('catArrow').item(0).classList.remove('hidden')
            document.getElementsByClassName('catArrow').item(1).classList.add('hidden')
        }
    }

    const togglePrice=(num)=>{
        let head = document.getElementsByClassName('menuBody').item(num)
        if(head.classList.contains('h-24')){
            head.classList.replace('h-24', 'h-0')
            document.getElementsByClassName('priceArrow').item(0).classList.add('hidden')
            document.getElementsByClassName('priceArrow').item(1).classList.remove('hidden')
        }
        else{
            head.classList.replace('h-0', 'h-24')
            document.getElementsByClassName('priceArrow').item(0).classList.remove('hidden')
            document.getElementsByClassName('priceArrow').item(1).classList.add('hidden')
        }
    }

    const toggleArtist=(num)=>{
        let head = document.getElementsByClassName('menuBody').item(num)
        if(head.classList.contains('h-44')){
            head.classList.replace('h-44', 'h-0')
            document.getElementsByClassName('artArrow').item(0).classList.add('hidden')
            document.getElementsByClassName('artArrow').item(1).classList.remove('hidden')
        }
        else{
            head.classList.replace('h-0', 'h-44')
            document.getElementsByClassName('artArrow').item(0).classList.remove('hidden')
            document.getElementsByClassName('artArrow').item(1).classList.add('hidden')
        }
    }

    return(
        <div className="w-[80%] sm:w-[100%]">
            <div className="relative mb-11 sm:mb-6 lg:mb-11 xl:mb-16">
                <span className="sm:hidden absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="w-5" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9741 23.947C14.6309 23.9464 17.211 23.0571 19.3038 21.4206L25.8836 28L28 25.8837L21.4202 19.3043C23.0577 17.2114 23.9476 14.6308 23.9483 11.9735C23.9483 5.37161 18.5764 0 11.9741 0C5.37189 0 0 5.37161 0 11.9735C0 18.5754 5.37189 23.947 11.9741 23.947ZM11.9741 2.99337C16.9269 2.99337 20.9547 7.02095 20.9547 11.9735C20.9547 16.926 16.9269 20.9536 11.9741 20.9536C7.02133 20.9536 2.99353 16.926 2.99353 11.9735C2.99353 7.02095 7.02133 2.99337 11.9741 2.99337Z" fill="#999999"/>
                    </svg>
                </span>
                <input type="text" placeholder="Search" 
                    className="bg-[#F4F2F2] h-[2rem] xl:h-[2.5rem] w-[100%] rounded-lg placeholder:text-[#999999] placeholder:font-[SatoshiVariable] 
                        placeholder:uppercase placeholder:text-center placeholder:text-base sm:placeholder:text-sm lg:placeholder:text-base shadow-md]"
                />
            </div>
            <div className="py-2">
                <svg className="inline-block align-middle w-[12%]" width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0417 4.42208C10.456 4.42208 9.89428 4.65474 9.48014 5.06888C9.066 5.48303 8.83333 6.04472 8.83333 6.63041C8.83333 7.2161 9.066 7.7778 9.48014 8.19194C9.89428 8.60608 10.456 8.83874 11.0417 8.83874C11.6274 8.83874 12.1891 8.60608 12.6032 8.19194C13.0173 7.7778 13.25 7.2161 13.25 6.63041C13.25 6.04472 13.0173 5.48303 12.6032 5.06888C12.1891 4.65474 11.6274 4.42208 11.0417 4.42208ZM4.79208 4.42208C5.24833 3.12903 6.09442 2.00933 7.21374 1.21732C8.33306 0.425316 9.67048 0 11.0417 0C12.4128 0 13.7503 0.425316 14.8696 1.21732C15.9889 2.00933 16.835 3.12903 17.2912 4.42208H33.125C33.7107 4.42208 34.2724 4.65474 34.6865 5.06888C35.1007 5.48303 35.3333 6.04472 35.3333 6.63041C35.3333 7.2161 35.1007 7.7778 34.6865 8.19194C34.2724 8.60608 33.7107 8.83874 33.125 8.83874H17.2912C16.835 10.1318 15.9889 11.2515 14.8696 12.0435C13.7503 12.8355 12.4128 13.2608 11.0417 13.2608C9.67048 13.2608 8.33306 12.8355 7.21374 12.0435C6.09442 11.2515 5.24833 10.1318 4.79208 8.83874H2.20833C1.62265 8.83874 1.06095 8.60608 0.646806 8.19194C0.232663 7.7778 0 7.2161 0 6.63041C0 6.04472 0.232663 5.48303 0.646806 5.06888C1.06095 4.65474 1.62265 4.42208 2.20833 4.42208H4.79208ZM24.2917 17.6721C23.706 17.6721 23.1443 17.9047 22.7301 18.3189C22.316 18.733 22.0833 19.2947 22.0833 19.8804C22.0833 20.4661 22.316 21.0278 22.7301 21.4419C23.1443 21.8561 23.706 22.0887 24.2917 22.0887C24.8774 22.0887 25.4391 21.8561 25.8532 21.4419C26.2673 21.0278 26.5 20.4661 26.5 19.8804C26.5 19.2947 26.2673 18.733 25.8532 18.3189C25.4391 17.9047 24.8774 17.6721 24.2917 17.6721ZM18.0421 17.6721C18.4983 16.379 19.3444 15.2593 20.4637 14.4673C21.5831 13.6753 22.9205 13.25 24.2917 13.25C25.6628 13.25 27.0003 13.6753 28.1196 14.4673C29.2389 15.2593 30.085 16.379 30.5412 17.6721H33.125C33.7107 17.6721 34.2724 17.9047 34.6865 18.3189C35.1007 18.733 35.3333 19.2947 35.3333 19.8804C35.3333 20.4661 35.1007 21.0278 34.6865 21.4419C34.2724 21.8561 33.7107 22.0887 33.125 22.0887H30.5412C30.085 23.3818 29.2389 24.5015 28.1196 25.2935C27.0003 26.0855 25.6628 26.5108 24.2917 26.5108C22.9205 26.5108 21.5831 26.0855 20.4637 25.2935C19.3444 24.5015 18.4983 23.3818 18.0421 22.0887H2.20833C1.62265 22.0887 1.06095 21.8561 0.646806 21.4419C0.232663 21.0278 0 20.4661 0 19.8804C0 19.2947 0.232663 18.733 0.646806 18.3189C1.06095 17.9047 1.62265 17.6721 2.20833 17.6721H18.0421ZM11.0417 30.9221C10.456 30.9221 9.89428 31.1547 9.48014 31.5689C9.066 31.983 8.83333 32.5447 8.83333 33.1304C8.83333 33.7161 9.066 34.2778 9.48014 34.6919C9.89428 35.1061 10.456 35.3387 11.0417 35.3387C11.6274 35.3387 12.1891 35.1061 12.6032 34.6919C13.0173 34.2778 13.25 33.7161 13.25 33.1304C13.25 32.5447 13.0173 31.983 12.6032 31.5689C12.1891 31.1547 11.6274 30.9221 11.0417 30.9221ZM4.79208 30.9221C5.24833 29.629 6.09442 28.5093 7.21374 27.7173C8.33306 26.9253 9.67048 26.5 11.0417 26.5C12.4128 26.5 13.7503 26.9253 14.8696 27.7173C15.9889 28.5093 16.835 29.629 17.2912 30.9221H33.125C33.7107 30.9221 34.2724 31.1547 34.6865 31.5689C35.1007 31.983 35.3333 32.5447 35.3333 33.1304C35.3333 33.7161 35.1007 34.2778 34.6865 34.6919C34.2724 35.1061 33.7107 35.3387 33.125 35.3387H17.2912C16.835 36.6318 15.9889 37.7515 14.8696 38.5435C13.7503 39.3355 12.4128 39.7608 11.0417 39.7608C9.67048 39.7608 8.33306 39.3355 7.21374 38.5435C6.09442 37.7515 5.24833 36.6318 4.79208 35.3387H2.20833C1.62265 35.3387 1.06095 35.1061 0.646806 34.6919C0.232663 34.2778 0 33.7161 0 33.1304C0 32.5447 0.232663 31.983 0.646806 31.5689C1.06095 31.1547 1.62265 30.9221 2.20833 30.9221H4.79208Z" fill="black"/>
                </svg>
                <span className="inline-block align-middle ml-4 text-2xl font-[SatoshiVariable]">Filter</span>
            </div>
            <svg className="h-[5%]" width="244" height="6" viewBox="0 0 244 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="244" height="6" rx="3" fill="#AFB091"/>
            </svg>

            <div className="w-full mt-8">
                <div onClick={()=>toggleCategory(0)} className="font-[SatoshiVariable] flex justify-between items-center" >
                    <span className="text-xl sm:text-base lg:text-xl">By category</span>
                    <span>
                        <svg className="catArrow" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                        </svg>
                        <svg className="catArrow hidden" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                        </svg>
                    </span>
                </div>
                <div className="menuBody mt-4 font-[SatoshiRegular] h-40 overflow-hidden transition-[height] duration-[500ms]">     
                    <ul className="h-[2rem]">
                        <li>
                            <span>
                                <input type="checkbox" name="editorials" value="editorials" className="mr-2" />
                            </span>
                            <span className="text-base sm:text-sm lg:text-base">Editorials</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span>
                                <input type="checkbox" name="fashion" value="fashion" className="mr-2" />
                            </span>
                            <span className="text-base sm:text-sm lg:text-base">Fashion</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span>
                                <input type="checkbox" name="optics" value="optics" className="mr-2" />
                            </span>
                            <span className="text-base sm:text-sm lg:text-base">Optics</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span>
                                <input type="checkbox" name="museum" value="museum" className="mr-2" />
                            </span>
                            <span className="text-base sm:text-sm lg:text-base">Art & Museum</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span>
                                <input type="checkbox" name="nature" value="nature" className="mr-2" />
                            </span>
                            <span className="text-base sm:text-sm lg:text-base">Nature</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full mt-4">
                <div onClick={()=>togglePrice(1)} className="font-[SatoshiVariable] flex justify-between items-center">
                    <span className="text-xl sm:text-base lg:text-xl">By price</span>
                    <span>
                        <svg className="priceArrow" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                        </svg>
                        <svg className="priceArrow hidden" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                        </svg>
                    </span>
                </div>
                <div className="menuBody mt-8 font-[SatoshiRegular] h-24 overflow-hidden transition-[height] duration-[500ms]">     
                    <ul className="h-[2rem]">
                        <li>
                            <span className="text-xl sm:text-sm lg:text-xl">${parseFloat(minValue).toFixed(2)} - ${parseFloat(maxValue).toFixed(2)}</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li className="w-full pl-2">
                            <MultiRangeSlider
                                min={0}
                                max={999}
                                minValue={minValue}
                                maxValue={maxValue}
                                ruler={false}
                                label={false}
                                baseClassName="custommulti-range-slider"
                                className="h-[0.5rem]"
                                onChange={(text)=>handleRange(text)}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full mt-8">
                <div onClick={()=>toggleArtist(2)} className="font-[SatoshiVariable] flex justify-between items-center">
                    <span className="text-xl sm:text-base lg:text-xl">By artist</span>
                    <span>
                        <svg className="artArrow" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                        </svg>
                        <svg className="artArrow hidden" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                        </svg>
                    </span>
                </div>
                <div className="menuBody h-44 font-[SatoshiRegular] mt-4 transition-[height] duration-[500ms]">     
                    <ul className="h-[2rem]">
                        <li>
                            <span className="text-base underline">All</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span className="text-xl sm:text-sm lg:text-xl">Below $100.00</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span className="text-xl sm:text-sm lg:text-xl">$100.00 - $150.00</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span className="text-xl sm:text-sm lg:text-xl">$150.00 - $200.00</span>
                        </li>
                    </ul>
                    <ul className="h-[2rem]">
                        <li>
                            <span className="text-xl sm:text-sm lg:text-xl">Above $200.00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}