import React, { Component } from 'react'
import SideNav from '../components/SideNav';

export class Marketplace extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className='w-[20%] pl-8 xl:pl-16 mt-16 overflow-hidden box-content'>
                <SideNav />
            </div>
        )
    }
}