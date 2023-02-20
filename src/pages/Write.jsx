import '../index.css'

const Write = () => {
    return (
        <div className="write flex flex-col items-center pt-[6rem]  h-[100vh]">
            <img
                src="https://source.unsplash.com/random"
                alt="writeImage"
                className="writeImage h-[30vh] xs:h-[34vh]  w-[20rem] xs:w-[25rem] ss:w-[35rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] "
            />
            <div className="writeForm relative flex flex-col flex-wrap justify-between w-[20rem] xs:w-[25rem] ss:w-[30rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] mt-[20px] space-y-3 ss:flex-row">
                <div className="writeFormGroup flex flex-col space-y-3">

                    <div className="flex flex-row space-x-2">
                    <label htmlFor="fileInput">
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
                        className="writeInput p-[10px] text-lg w-[18.1rem] xs:w-[22.8rem] ss:w-[25rem] sm:w-[35rem] md:w-[40rem]"
                        autoFocus={true}
                    />
                    </div>
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText p-[20px] h-[20vh] ss:h-[22vh]  ss:w-[25rem] ml-[29px] xs:ml-[37px] sm:w-[35rem] md:w-[40rem]"
                    ></textarea>
                </div>
                <div className="writeFormGroup overflow-hidden sm:ml=[16.5rem]">
                    
                    <button className="writeSubmit bg-blue-600 text-white mt-[1rem] px-5 py-3 ml-[7.7rem] xs:ml-[10rem] 
                    ss:ml-[12rem] sm:ml-[16rem] md:ml-0">Publish</button>
                </div>
            </div>
        </div>
    )
}

export default Write