import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://serviceride-server.onrender.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                // navigate('/service');
                window.location.href = '/service';
            } else if (response.status === 404) {
                const wantToSignup = window.confirm("User not found. Would you like to sign up?");
                if (wantToSignup) {
                    navigate('/signup');
                }
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Something went wrong. Please try again.');
        }
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
                            required
                            value={formData.password}
                            onChange={handleChange}
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
