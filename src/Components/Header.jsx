import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imagee.jpeg'

const Header = () => {
    return (
        <header className="bg-black text-green-500 p-4 flex justify-between items-center border-b border-green-500/20">
            <div className="flex items-center gap-3">
                <img src={logo} alt="ServiceRide Logo" className="h-10 w-10 object-contain rounded-full" />
                <h1 className="text-2xl font-bold tracking-wider">ServiceRide</h1>
            </div>
            <nav className="flex gap-6 font-medium">
                <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
                <Link to="/service" className="hover:text-green-400 transition-colors">Service</Link>
                <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </nav>
        </header>
    )
}

export default Header
