'use client';
import React from 'react'
import { Select, SelectItem } from '@nextui-org/select'
import { SelectBox } from './SelectBox'
const Seller = () => {
    return (
        <>
        <div className='Seller'>
            <div className='Seller_Content '>
                <div className='Seller_Text '>
                    <h3 className='Border_B'>فرم درخواست خرید </h3>
                </div>
                <div className='Seller_Item '>
                    <input type='text' placeholder='نام و نام خانوادگی ' className='Input_Text' />
                   <SelectBox></SelectBox>
                </div>
            </div>
        </div>
        </>
    )
}

export default Seller
