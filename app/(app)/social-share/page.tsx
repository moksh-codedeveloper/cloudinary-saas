import React from 'react'

function SocialShare() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Social Share</h1>
      <p className="text-gray-600 mb-6">Share this page with your friends!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Share on Facebook
        </button>
        <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
          Share on Twitter
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Share on Instagram
        </button>
      </div>
    </div>
  )
}

export default SocialShare