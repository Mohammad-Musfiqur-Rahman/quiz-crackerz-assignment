import React from 'react';
import BannerImg from './banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Define Your Best Skill NOW!</h1>
                    <p className="py-6">Test Your Skill here, Without any cost.It's totally free</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;