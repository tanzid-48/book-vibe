import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const ListedBooks = () => {

    const {storedBooks,wishListBooks} = useContext(BookContext);
    console.log(storedBooks,wishListBooks,"hello vii.")

    return (

        <div className='w-10/12 mx-auto'>
            <h3>This is listedBooks</h3>
            read list: {storedBooks.length}
            wish list: {wishListBooks.length}

        </div>
    );
};

export default ListedBooks;