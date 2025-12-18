import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [formData, HZ] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login success
        navigate('/service');
    }

    return (
        <div className="flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-md p-8 border border-green-500/30 rounded-lg bg-black shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-green-400">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-green-400">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="w-full p-3 bg-green-600 text-black font-bold rounded hover:bg-green-500 transition-colors">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
