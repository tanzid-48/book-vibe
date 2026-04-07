import React from 'react';

const ReadListCard = ({ book }) => {
    return (
        <div className="flex items-center gap-6 border rounded-2xl p-4 mb-4 shadow-sm">
            <div className="bg-gray-100 rounded-xl p-4 w-36 h-36 flex items-center justify-center">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-full object-contain"
                />
            </div>
            <div className="flex flex-col gap-2 flex-1">

                <h3 className="text-xl font-bold">{book.bookName}</h3>
                <p className="text-gray-500 text-sm">By : {book.author}</p>

                <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm">Tag</span>
                    {book.tags.map(tag => (
                        <span key={tag} className="badge bg-green-100 text-green-600 text-xs font-medium px-3 py-1">
                            #{tag}
                        </span>
                    ))}
                    <span className="text-gray-400 text-xs flex items-center gap-1 ml-2">
                        📅 Year of Publishing: {book.yearOfPublishing}
                    </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>👤 Publisher: {book.publisher}</span>
                    <span>📄 Page {book.totalPages}</span>
                </div>

                <div className="divider my-0"></div>
                <div className="flex items-center gap-3 flex-wrap">
                    <span className="badge bg-blue-100 text-blue-500 px-3 py-1 text-xs font-medium">
                        Category: {book.category}
                    </span>
                    <span className="badge bg-orange-100 text-orange-500 px-3 py-1 text-xs font-medium">
                        Rating: {book.rating}
                    </span>
                    <button className="btn btn-sm bg-green-500 text-white border-none hover:bg-green-600 ml-auto px-5">
                        View Details
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReadListCard;