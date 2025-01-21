'use client';
import React from 'react'
import { Select, SelectItem } from '@nextui-org/select'

const Seller = () => {
    return (
        <>
                       

                    <div className='Seller mx-auto'>

                <div className='Seller_Content '>
                    
                    <div className='Seller_Text '>
            
                    </div>
                  
                    <div className='Seller_Item grid grid-cols-4 gap-4'>
                    <form class="max-w-xs col-span-1">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">   نام و نام خانوادگی متقاضی    </label>
                        <input type='text' placeholder='نام و نام خانوادگی '  class="bg-gray-50 border border-gray-300 text-rose-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </form>
                        <form class="max-w-xs col-span-1">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">لطفا نوع معامله را مشخص کنید </label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>نوع معامله </option>
                                <option value="US">خرید </option>
                                <option value="CA">  رهن واجاره   </option>
                                <option value="DE">تهاتر یا معاوضه  </option>
                                <option value="FR"> پیش فروش</option>
                                <option value="FR"> مشارکت</option>
                            </select>
                        </form>
                        <form class="max-w-xs col col-span-1 ">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">لطفا نوع معامله را مشخص کنید </label>
                            <select id="countries" class=" form-trans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>نوع معامله </option>
                                <option value="US">رهن و اجاره آپارتمان </option>
                                <option value="US">رهن و اجاره ویلائی </option>
                                <option value="CA">  رهن و اجاره باغ ویلا  </option>
                                <option value="US">رهن و اجاره تجاری </option>
                                
                                
                            </select>
                        </form>
                        <form class="max-w-xs col-span-1 ">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">لطفا نوع معامله را مشخص کنید </label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>نوع معامله </option>
                                <option value="US">خرید آپارتمان </option>
                                <option value="CA">  خرید زمین </option>
                                <option value="US">خرید ویلائی </option>
                                <option value="CA">  خرید باغ ویلا  </option>
                                <option value="US">خرید تجاری </option>
                                <option value="CA">  خرید اداری </option>
                                <option value="US">خرید هتل  </option>
                              
                                
                            </select>
                        </form>
                        <form class="max-w-xs col-span-1">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">   قیمت   </label>
                        <input type='text' placeholder='قیمت'  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </form>
                        <form class="max-w-xs col-span-1">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">  مبلغ هن   </label>
                        <input type='text' placeholder=' مبلغ رهن   '  class="bg-gray-50 border border-gray-300 text-fuchsia-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </form>
                        <form class="max-w-xs col-span-1">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">  مبلغ اجاره  </label>
                        <input type='text' placeholder=' مبلغ اجاره  '  class="bg-gray-50 border border-gray-300 text-violet-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </form>
                        <form class="max-w-xs col-span-1">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">   محدوده    </label>
                        <input type='text' placeholder='محدوه '  class="bg-gray-50 border border-gray-300 text-blue-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </form>
                        <form class="max-w-xl1 col-span-2">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">   آدرس    </label>
                        <input type='text' placeholder='آدرس'  class="bg-gray-50 border border-gray-300 text-emerald-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </form>
                        <form class="max-w-xl1 col-span-2 ">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">   توضیحات     </label>
                        <input type='text' placeholder='توضیحات'  class="bg-gray-50 border border-gray-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </form>

                        


                    </div>
                </div>
            </div>
        </>
    )
}

export default Seller
