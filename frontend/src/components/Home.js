import React, { useState } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [initialUrl, setInitialUrl] = useState('');
    const history = useNavigate();

    const Shorten = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:9808/create-short-url', {
                "long_url": initialUrl,
            });
            console.log(response.data);
            history("/result:" + response.data);
        } catch (error) {
            console.log(error.toString());
        }
    }

    return(
        <div>
                <h1 className="flex text-6xl h-fit pt-36 w-fit mx-auto font-sans font-medium">URL Shortener on Go</h1>
                <div className="mt-36 p-6 w-fit mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <form onSubmit={Shorten}>
                        <input type="text" value= {initialUrl} placeholder="Enter URL to shorten" className="border border-gray-500 m-10 rounded-md h-8 text-center w-96 font-medium" onChange={(e)=> setInitialUrl(e.target.value)}></input>
                        <button type="submit" className="bg-sky-500 rounded-md p-1 w-20 font-medium">Go</button>
                    </form>
                </div>
        </div>
    )
}

export default Home