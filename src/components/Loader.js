import React from 'react';

//Gif
import spinner from '../loading/spinner.gif';

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loading cat" width='300px'/>
            <h2>loading...</h2>
        </div>
    );
};

export default Loader;