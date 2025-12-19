import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }); // Use name attribute
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful! Please login.');
                navigate('/login');
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Something went wrong. Please try again.');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-md p-8 border border-green-500/30 rounded-lg bg-black shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-green-400">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-green-400">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-green-400">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500"
                            placeholder="Create a password"
                        />
                    </div>
                    <button type="submit" className="w-full p-3 bg-green-600 text-black font-bold rounded hover:bg-green-500 transition-colors">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
