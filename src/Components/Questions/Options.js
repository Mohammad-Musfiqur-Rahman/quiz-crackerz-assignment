import React from 'react';

const Options = ({ item }) => {
    console.log(item)
    return (
        <div>
            <div className='flex-1 m-3'>
                <h3 className='text-xl'> <input type="radio" name="radio-7" className="radio radio-info" /> {item}</h3>
            </div>
        </div>
    );
};

export default Options;