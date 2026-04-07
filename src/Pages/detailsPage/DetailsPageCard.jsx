import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';



const DetailsPageCard = ({ expectedBook }) => {
 
    const { handleMarkAsRead } = useContext(BookContext);
    const {handleWishListBooks} = useContext(BookContext);
    if (!expectedBook)
        return <p className="text-center mt-20 text-gray-400">Book not found.</p>;
    return (
        <div className="flex flex-col lg:flex-row gap-10">

            <div className="bg-gray-100 rounded-2xl p-10 flex items-center justify-center lg:w-1/3">
                <img
                    src={expectedBook.image}
                    alt={expectedBook.bookName}
                    className="w-full h-80 object-contain rounded-xl" />
            </div>

            <div className="lg:w-2/3 flex flex-col gap-3">
                <h2 className="text-4xl font-bold">{expectedBook.bookName}</h2>
                <p className="text-gray-500">By : {expectedBook.author}</p>

                <div className="divider my-1"></div>

                <p className="text-gray-700 font-medium">{expectedBook.category}</p>

                <div className="divider my-1"></div>

                <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-bold text-black">Review : </span>
                    {expectedBook.review}
                </p>

                <div className="flex items-center gap-3 flex-wrap mt-1">
                    <span className="font-medium text-black">Tag</span>
                    {expectedBook.tags.map(tag => (
                        <span key={tag} className="badge bg-green-100 text-green-600 font-medium px-3 py-1">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="divider my-1"></div>

                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between  pb-2">
                        <span className="text-gray-500">Number of Pages:</span>
                        <span className="font-bold">{expectedBook.totalPages}</span>
                    </div>
                    <div className="flex justify-between  pb-2">
                        <span className="text-gray-500">Publisher:</span>
                        <span className="font-bold">{expectedBook.publisher}</span>
                    </div>
                    <div className="flex justify-between  pb-2">
                        <span className="text-gray-500">Year of Publishing:</span>
                        <span className="font-bold">{expectedBook.yearOfPublishing}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span className="text-gray-500">Rating:</span>
                        <span className="font-bold">{expectedBook.rating}</span>
                    </div>
                </div>

                <div className="flex gap-3 mt-3">
                    <button onClick={() => handleMarkAsRead(expectedBook)} className="btn btn-outline px-8 "> Mark As Read</button>
                    <button onClick={() => handleWishListBooks(expectedBook)} className="btn bg-teal-400 text-white px-8 border-none hover:bg-teal-500"> Add To Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default DetailsPageCard;