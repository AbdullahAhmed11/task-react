import React, { useState } from 'react'
import Modal from './Modal';

const Upload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <form class="flex items-center space-x-6">
                <div class="shrink-0">
                </div>
                <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                        }}
                        type="file"
                        class="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
    "/>
                </label>
            </form>
            {selectedImage && (
                <div className='flex items-center justify-center flex-col mt-5'>
                    <img
                        alt="not found"
                        width={"250px"}
                        height={"200px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)} className='border px-6 py-2 my-4'>Remove</button>
                    <Modal />
                </div>
            )}

        </>

    )
}

export default Upload