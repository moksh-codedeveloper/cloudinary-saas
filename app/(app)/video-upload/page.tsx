import React from 'react'

function VideoUpload() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Upload Your Video</h2>
            <label
                htmlFor="video-upload"
                className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:bg-gray-50"
            >
                <div className="flex flex-col items-center justify-center">
                    <svg
                        className="w-10 h-10 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 10l-4-4m0 0l-4 4m4-4v12"
                        ></path>
                    </svg>
                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400">MP4, AVI, MOV (max 100MB)</p>
                </div>
                <input id="video-upload" type="file" className="hidden" accept="video/*" />
            </label>
            <button className="btn btn-primary mt-4">Upload Video</button>
        </div>
    </div>
  )
}

export default VideoUpload
