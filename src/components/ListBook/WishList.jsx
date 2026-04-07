import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import WishListCard from './WishListCard';

const WishList = () => {

    const { wishListBooks } = useContext(BookContext);
    return (
     <div>
    {
        wishListBooks.length === 0 
        ? (
            <div className="h-[60vh] flex flex-col items-center justify-center bg-gray-50 rounded-3xl">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-3xl font-bold text-gray-700">No Wish Books Yet</h3>
        <p className="text-gray-500 mt-3 max-w-md text-center">
            Books you mark as "Wish List" will appear here.
        </p>
      </div>
        ) : ( wishListBooks.map(book => <WishListCard key={book.bookId} book={book}></WishListCard>))

    }
        </div>
    );
};

export default WishList;