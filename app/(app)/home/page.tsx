import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Welcome to Cloudinary SaaS
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Manage your media assets effortlessly with our powerful and intuitive platform.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-outline">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;