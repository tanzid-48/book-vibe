import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import ReadListCard from './ReadListCard';

const ReadList = () => {
 
const { storedBooks } = useContext(BookContext);


    return (
        <div>
            {
                storedBooks.map( book => <ReadListCard key={book.bookId} book = {book}></ReadListCard> )
            }
        </div>
    );
};

export default ReadList;