import '../index.css';
import { useState } from 'react';

const Settings = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };
    const borderStyle ={
        borderBottom: isHover ? "2px solid gray" : "1.5px solid gray",
        border:"none"
    }
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
                                <br/>
                                <input type="text" placeholder="First name" className='profileInput hover:border-gray' 
                                style={borderStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                            </div>
                            <div className='flex-[50%]'>
                                <label htmlFor="" className='text-[20px] mt-5 mr-2'>Last name</label>
                                <br/>
                                <input type="text" placeholder="Last name" className='profileInput'
                                style={borderStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex-[50%]'>
                                <label htmlFor="" className='text-[20px] mt-5'>Username</label>
                                <br/>
                                <input type="text" placeholder="Username" className='profileInput'
                                style={borderStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                            </div>
                            <div className='flex-[50%]'>
                                <label htmlFor="" className='text-[20px] mt-5'>Email</label>
                                <br/>
                                <input type="email" placeholder="example@gmail.com" className='profileInput'
                                style={borderStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                            </div>
                        </div>
                        
                        <div className='flex'>
                            <div className='flex-[50%]'>
                                <label htmlFor="" className='text-[20px] mt-5'>Password</label>
                                <br/>
                                <input type="password" placeholder='password' className='profileInput'
                                style={borderStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                            </div>
                            <div className='flex-[50%]'>
                                <label htmlFor="" className='text-[20px] mt-5'>Education</label>
                                <br/>
                                <input type="email" placeholder="Punjab Engineering College" className='profileInput'
                                style={borderStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                            </div>
                        </div>
                        
                        <button className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded settingsSubmit" style={{
                            marginTop: "50px",
                            width: "100px",
                        }}>
                            Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Settings
