import React from 'react';
import BannerImg from '../../assets/hero_img.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 w-9/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between gap-10">
                <img
                    src={BannerImg}
                    alt="Books on a bookshelf"
                    className="max-w-sm w-full rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold leading-tight">
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <p className="mt-4 text-base-content/70 max-w-sm">
                        Discover your next favorite read. Explore our curated collection of must-read books.
                    </p>
                    <button className="btn btn-success mt-6">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;