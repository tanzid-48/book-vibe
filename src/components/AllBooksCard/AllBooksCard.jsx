import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AllBooksCard = ({ book }) => {
    return (
        <Link to = {`/detailsPage/${book.bookId}`} className="card bg-base-100 shadow-sm border border-gray-100">
            <figure className='p-6'>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className='rounded-xl w-full h-48 object-cover' />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2 flex-wrap">
                    {book.tags.map((tag) => (
                        <div key={tag} className="badge text-green-500 bg-green-100 font-bold text-sm">{tag}</div>
                    ))}
                </div>
                <h2 className="card-title text-xl">{book.bookName}</h2>
                <p className='text-gray-500 text-sm'>{book.author}</p>
                <div className="border-t border-dashed border-gray-300 pt-4 flex justify-between items-center">
                    <div className="badge badge-outline">{book.category}</div>
                    <div className="badge badge-outline flex items-center gap-1">
                        {book.rating} <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AllBooksCard;