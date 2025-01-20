import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminInstance } from '../../axiosInstance/Axios';
import { toast } from 'react-toastify';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const Nvgt = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await adminInstance.post('/admin/signup', { name, email, password });
            const { message } = response.data;
            toast.success(message, { position: 'top-center' });
            setLoading(false);
            Nvgt('/adminlogin');
        } catch (error) {
            setLoading(false);
            toast.error(error.response?.data?.error || 'Signup failed. Please try again.', { position: 'top-right' });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="w-full max-w-md p-10 bg-white rounded-2xl shadow-xl shadow-green-200">
                <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8">SignUp</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>
                    <button
                        type="submit"
                        onClick={() => Nvgt('/adminlogin')}
                        className={`w-full py-3 font-bold text-green-600 bg-white rounded-lg border-2 border-gray-300 hover:bg-green-700 hover:text-white hover:border-green-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
