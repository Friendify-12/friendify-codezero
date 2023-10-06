// src/LoginForm.js
import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
                <p className="text-center mb-6">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-[blue] underline">
                        Register here.
                    </Link>
                </p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        Log In
                    </button>
                </form>
                <hr className="my-6 border-t-2 border-gray-300" />
                <div>
                    <div className="flex items-center justify-center bg-white shadow-md p-4 rounded-lg hover:bg-blue-300 cursor-pointer">
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="Google Icon" className="w-6 h-6 mr-2" />
                        <span className="text-lg font-semibold text-gray-800">Sign in with Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
