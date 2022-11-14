import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShortUrl = () => {
    const address = window.location.href.split('3000/:');
    const [initialUrl, setinitialUrl] = useState('');
    const shortUrl = address[1];

    useEffect(() => {
        retrieveShortUrl();
        RedirectInitial();
    });

    const retrieveShortUrl = async () => {
        try {
            const response = await axios.get('http://localhost:9808/:' + shortUrl);
            setinitialUrl(response.data);    
        } catch (error) {
            console.log(error);
        }
    }

    const RedirectInitial = () => {
        window.location.replace(initialUrl);
    }

    return(
        <div>
            <h1 className="flex text-6xl h-fit pt-36 w-fit mx-auto font-sans font-medium">URL Shortener on Go</h1>
                <div className="mt-36 p-6 w-fit mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <p className='w-fit h-fit text-1xl font-sans font-medium mx-auto'>Loading</p>
                </div>
        </div>
    )
}

export default ShortUrl;