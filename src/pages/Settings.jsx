import React from 'react'
import '../index.css';

const Settings = () => {
    return (
        <>
            <div className="mt-20 settings mr-5">
                <div className="settingsWrapper ml-10">
                    <div className="settingsTitle flex items-center justify-between">
                        <span className="settingsUpdateTitle ">Account Settings</span>
                        <span className="settingsDeleteTitle">Delete account</span>
                    </div>
                    <form action="" className="settingsForm flex flex-col">
                        <label htmlFor="">Profile Picture</label>
                        <div className="settingsPP flex items-center my-2">
                            <img src="https://source.unsplash.com/random" alt="profile_picture" className='w-[70px] h-[70px] rounded object-cover' />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon far fa-user-circle w-[25px] h-[25px] rounded-full bg-rose-500 text-white flex items-center justify-center ml-3 cursor-pointer"></i>
                            </label>
                            <input type="file" id="fileInput" className='hidden' />
                        </div>
                        <div className='flex'>
                            <div className='flex-[50%]'>
                                <label htmlFor="" className='text-[20px] mt-5 mr-2'>First name</label>
                                <input type="text" placeholder="firstname" className='profileInput' />
                            </div>
                            <div className='flex-[50%]'>
                                <label htmlFor="" className='text-[20px] mt-5 mr-2'>Last name</label>
                                <input type="text" placeholder="Lastname" className='profileInput' />
                            </div>
                        </div>
                        <label htmlFor="" className='text-[20px] mt-5'>Username</label>
                        <input type="text" placeholder="username" className='profileInput' />
                        <label htmlFor="" className='text-[20px] mt-5'>Email</label>
                        <input type="email" placeholder="example@gmail.com" className='profileInput' />
                        <label htmlFor="" className='text-[20px] mt-5'>Password</label>
                        <input type="password" placeholder='password' className='profileInput' />
                        <button className="settingsSubmit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Settings