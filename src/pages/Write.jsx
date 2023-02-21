import { useEffect, useState } from 'react'
import '../index.css'

const Write = () => {
    const[expand,setExpand]=useState("")
    const[content,setContent]=useState("")
    useEffect(() => {
        setExpand("h-auto p-0")
    console.log("expanded")
    
    }, [content])
    
    return (
        <div className="write border-black  pt-[7%] w-[90%] mx-auto h-[100vh] border-4 flex flex-col items-center ">
            <img
                src="https://source.unsplash.com/random"
                alt="writeImage"
                className="writeImage h-[260px] w-full"
            />
            <div className="writeForm border-red-500  w-full border-4 relative flex flex-col flex-wrap items-center ">
                <div className="writeFormGroup border-green-500 w-full border-4 flex flex-col">

                    <div className="flex flex-row border-4 items-center  border-blue-400 p-4 text-xl gap-[10px]">
                        <span className='flex w-full'>
                        <label htmlFor="fileInput" className="flex items-center">
                        <i className="writeIcon xs:writeIcon2 fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        name="fileInput"
                        id="fileInput"
                        className="hidden"
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput w-full p-4"
                        autoFocus={true}
                    />
                        </span>
                        <div className="writeFormGroup sm:block hidden ">
                    
                    <button className="writeSubmit   bg-blue-600 text-white px-5 py-3">Publish</button>
                </div>
                    </div>
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        onChange={(e)=>setContent(e.target.value)}
                        className={`writeInput writeText border-4 border-orange-500 overflow-hidden`}
                    ></textarea>
                </div>
                <div className="writeFormGroup">
                    
                    <button className="writeSubmit mt-[18%] block sm:hidden bg-blue-600 text-white px-5 py-3">Publish</button>
                </div>
            </div>
        </div>
    )
}

export default Write