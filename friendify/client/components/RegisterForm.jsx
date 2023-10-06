import React from 'react';
import Link from 'next/link';

const RegisterForm = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <h1 className="text-4xl font-bold mb-6 text-center">Register</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
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
                        <label className="block text-sm font-medium text-gray-600">
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
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[blue] underline">
                        Log in here.
                    </Link>
                </p>
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

export default RegisterForm;
