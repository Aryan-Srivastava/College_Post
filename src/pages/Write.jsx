import React from 'react'
import '../index.css'

const Write = () => {
    return (
        <div className="write flex flex-col items-center pt-24">
            <img
                src="https://source.unsplash.com/random"
                alt="writeImage"
                className="writeImage"
            />
            <div className="writeForm relative">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
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
                        className="writeInput"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup overflow-hidden">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText "
                    ></textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </div>
        </div>
    )
}

export default Write