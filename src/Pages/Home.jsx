import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/image1.png'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-full max-w-4xl mb-8">
                <img src={heroImage} alt="Vehicle Service" className="w-full h-auto rounded-lg shadow-lg border border-green-500/30" />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-green-500">Welcome to ServiceRide</h2>

            <p className="text-lg max-w-2xl mb-8 text-gray-300 leading-relaxed">
                ServiceRide is your premier destination for reliable and professional vehicle maintenance.<br />
                We connect you with top-tier mechanics to ensure your ride is always smooth and safe.<br />
                Experience seamless booking, transparent pricing, and quality service delivery.<br />
                Join our community today and give your vehicle the care it deserves.
            </p>

            <div className="flex gap-6">
                <Link to="/signup" className="px-8 py-3 bg-green-600 text-black font-bold rounded hover:bg-green-500 transition-colors border border-green-500">
                    Sign Up
                </Link>
                <Link to="/login" className="px-8 py-3 bg-transparent text-green-500 font-bold rounded border border-green-500 hover:bg-green-500/10 transition-colors">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Home
