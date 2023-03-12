import React from 'react'
import '../index.css'
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Write = () => {    
    return (
        <div className="write pt-[7%] w-[100%] mx-auto h-screen flex flex-col items-center ">
            <div className='w-[85%] mx-auto'>
            <img
                src="https://source.unsplash.com/random"
                alt="writeImage"
                className="writeImage h-[260px] w-full mt-[15%] xs:mt-[7%] sm:mt-[2%]"
            />
            <div className="writeForm w-full relative flex flex-col flex-wrap items-center ">
                <div className="writeFormGroup w-full flex flex-col">

                    <div className="flex flex-row items-center p-4 text-xl gap-[10px]">
                        <span className='flex w-full'>
                        <label htmlFor="fileInput" className="flex items-center  mr-[10px]">
                        <i className="writeIcon xs:writeIcon2 fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        name="fileInput"
                        id="fileInput"
                        className="hidden border-[3px] text-[1rem] p-[2px]"
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput font-bold w-full p-4"
                        autoFocus={true}
                    />
                        </span>
                        <div className="writeFormGroup ss:block hidden ">
                    
                    <button className="writeSubmit bg-blue-600 text-white px-5 pt-[0.6rem] pb-[0.75rem] rounded-[30px]">Publish</button>
                </div>
             </div>
                    <TextareaAutosize className='pr-[1rem] pl-[4rem] pb-[1rem]' placeholder="Tell your story..." minRows={5}/>;
                </div>
                <div className="writeFormGroup">
                    
                    <button className="writeSubmit mt-[18%] block ss:hidden bg-blue-600 text-white px-5 pt-[0.6rem] pb-[0.75rem] mb-3 rounded-[30px]">Publish</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Write