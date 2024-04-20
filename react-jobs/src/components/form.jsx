import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from "../api"
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import LoadingIndicator from './LoadingIndicator';
function form({route, method}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const name = method === "Landing" ? "Log in" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try{
            const res = await api.post(route, {username, password})
            if (method === "Landing"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.access)
                navigate("/")
            }else {
                navigate("/Landing")
            }
        }
        catch(error){
            alert(error)
        }finally {
            setLoading(false)
        }
        };
    return (
    <>
    <body className="bg-gray-500">
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-xl shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white form-input" placeholder="username" required />
            </div>
            <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white form-input" required />
            </div>
            <div className="flex items-start">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <Link to="/Forgotpassword" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"> Lost Password?</Link>
            </div>
            {loading && <LoadingIndicator/>}
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 form-button">{name}</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <Link to="/Createaccount" className="text-blue-700 hover:underline dark:text-blue-500"> Create account</Link>
            </div>
        </form>
    </div>
    </body>
    </>
    );
}

export default form




