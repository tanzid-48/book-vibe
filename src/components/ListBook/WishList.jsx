import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import WishListCard from './WishListCard';

const WishList = () => {

    const { wishListBooks } = useContext(BookContext);
    return (
        <div>
            {
                wishListBooks.map(book => <WishListCard key={book.bookId} book={book}></WishListCard>)
            }
        </div>
    );
};

export default WishList;