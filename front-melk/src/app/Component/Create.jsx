import React from 'react'
import Wrapper from './Wrapper'

const Create = () => {
    return (
        <div>
            <Wrapper>
                <form className='grid gap-5 grid-cols-2 text-right'>
                    <label className='col-span-1 py-5' >نام
                        <span className='mx-4'></span>
                        <input class="col-span-1 shadow appearance-none border rounded w-60  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="نام  " />
                    </label>
                    <label className='col-span-1 py-5' > نام خانوادگی
                        <span className='mx-4'></span>
                        <input class="col-span-1 shadow appearance-none border rounded w-60  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="نام  " />
                    </label>

                </form>
                <div className='border-b-2 bg-slate-100 w-full  m-5 mx-auto '>   </div>
                <form className='grid gap-5 grid-cols-2 text-right '>
                    <label className='col-span-1 py-5' >موبایل
                        <span className='mx-4'></span>
                        <input class="col-span-1 shadow appearance-none border rounded w-60  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="نام  " />
                    </label>
                    <label className='col-span-1 py-5' > تلفن
                        <span className='mx-4'></span>
                        <input class="col-span-1 shadow appearance-none border rounded w-60  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="نام  " />
                    </label>

                </form>
                <div className='border-b-2 bg-slate-100 w-full  m-5 mx-auto'>   </div>
                <form class=" grid gap-5 grid-cols-4 ">

                    <label class=" col-span-1 py-5 ">نوع واگذاری
                        <select class="w-60 my-2 py-2 px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نوع واگذاری">
                            <option selected> انتخاب کنید </option>
                            <option value="US">فروش</option>
                            <option value="CA">رهن و اجاره</option>
                            <option value="FR">پیش فروش</option>
                            <option value="DE">مشارکت در ساخت </option>
                        </select >
                    </label>
                    <label class=" col-span-1 py-5">نوع ملک
                        <select class="w-60 my-2 py-2 px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نوع واگذاری">
                            <option selected> انتخاب کنید </option>
                            <option value="US">آپارتمان</option>
                            <option value="CA">زمین-کلنگی</option>
                            <option value="FR"> ویلایی</option>
                            <option value="DE"> دفتر کار  </option>
                        </select >
                    </label>
                    <label class=" col-span-1 py-5">نوع سند
                        <select class="w-60 my-2 py-2 px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نوع واگذاری">
                            <option selected> انتخاب کنید </option>
                            <option value="US">تک برگ</option>
                            <option value="CA">قولنامه ای</option>
                            <option value="FR"> آستانه</option>
                            <option value="DE">  اوقاف </option>
                        </select >
                    </label>

                    <label className=" col-span-1 py-5 "> جهت ملک
                        <select class="w-60 my-2 py-2 px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نوع واگذاری">
                            <option selected> </option>
                            <option value="US">شمالی</option>
                            <option value="CA"> جنوبی </option>
                            <option value="FR">شرقی </option>
                            <option value="DE"> غربی  </option>
                        </select >
                    </label>



                </form>
                <div className='border-b-2 bg-slate-100 w-full  m-5 mx-auto'>   </div>
                <form className='grid gap-5 grid-cols-3' >
                    <label className='col-span-1 py-5' >قیمت
                        <span className='mx-4'></span>
                        <input class="col-span-1 shadow appearance-none border rounded w-60  mt-5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="تعداد خواب   " />
                    </label>
                    <label className='col-span-1 py-5' >سال ساخت
                        <span className='mx-4'></span>
                        <input class="col-span-1 shadow appearance-none border rounded w-60  mt-5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="تعداد خواب   " />
                    </label>
                    <label className='col-span-1 py-5' > متراژ
                        <span className='mx-4'></span>
                        <input class="col-span-1 shadow appearance-none border rounded w-60  mt-5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="texr" placeholder="تعداد خواب   " />
                    </label>
                </form>
                <div className='border-b-2 bg-slate-100 w-full  m-5 mx-auto'>   </div>
                <form className='grid gap-5 grid-cols-3' >
                    <label className='col-span-1 py-5' >طبقه
                        <span className='mx-4'></span>
                        <input class=" shadow appearance-none border rounded w-60  mt-5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="تعداد خواب   " />
                    </label>
                    <label className='col-span-1 py-5' >تعداد طبقات
                        <span className='mx-4'></span>
                        <input class=" shadow appearance-none border rounded w-60  mt-5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="تعداد خواب   " />
                    </label>
                    <label className='col-span-1 py-5' > واحد در طبقات
                        <span className='mx-4'></span>
                        <input class="shadow appearance-none border rounded w-60  mt-5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="تعداد خواب   " />
                    </label>
                </form>
                <div className='border-b-2 bg-slate-100 w-full  m-5 mx-auto'>   </div>
                <form className='grid gap-5 grid-cols-3' >
                    <label className='col-span-1 py-5' >تاریخ ثبت
                        <span className='mx-4'></span>
                        <input className="  shadow appearance-none border rounded w-60  mt-5  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="Date" placeholder="  تاریخ ثبت     " />
                    </label>

                    <label className='col-span-2 py-5' >  آدرس

                        <input class=" shadow appearance-none border rounded w-10/12  mt-5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text-area" placeholder="تعداد خواب   " />
                    </label>
                </form>
                <div className='border-b-2 bg-slate-100 w-full  m-5 mx-auto'>   </div>
                <h1 className='text-center'>تزئینات</h1>
                <div className='border-b-2 bg-slate-100 w-full  m-5 mx-auto'>   </div>
                <div class="inline-flex items-center grid-cols-4 gap-3">
                    <label class="flex items-center cursor-pointer relative mx-10 col-span-1"> گچ کاری
                        <span className='mx-4'></span>
                        <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label class="flex items-center cursor-pointer relative mx-10 col-span-1">نقاشی
                        <span className='mx-3'></span>
                        <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label class="flex items-center cursor-pointer relative mx-10 col-span-1">کاغذ دیواری
                        <span className='mx-4'></span>
                        <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label class="flex items-center cursor-pointer relative mx-10 col-span-1"> پرده
                        <span className='mx-4'></span>
                        <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label class="flex items-center cursor-pointer relative mx-10 col-span-1">سقف کاذب
                        <span className='mx-4'></span>
                        <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label class="flex items-center cursor-pointer relative mx-10 col-span-1"> نور مخفی
                        <span className='mx-4'></span>
                        <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label class="flex items-center cursor-pointer relative mx-10 col-span-1"> لوستر
                        <span className='mx-4'></span>
                        <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                </div>
            </Wrapper>
        </div>
    )
}

export default Create
