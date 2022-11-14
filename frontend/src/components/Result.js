import React from 'react';

const Result = () => {
    const address = window.location.href;
    const short = address.replace("result", "");
    
    return(
        <div>
            <h1 className="flex text-6xl h-fit pt-36 w-fit mx-auto font-sans font-medium">URL Shortener on Go</h1>
            <h1 className='w-fit h-fit text-3xl mt-20 font-sans font-medium mx-auto'>This is your shortened URL</h1>
            <div className="mt-16 p-6 w-fit mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <a href={short}><p className='w-fit h-fit text-1xl font-sans font-medium mx-auto'>{short}</p></a>
            </div>
        </div>
    )
}

export default Result;