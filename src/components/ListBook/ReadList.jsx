import React, { useContext, useEffect } from 'react';
import { BookContext } from '../../context/BookContext';
import ReadListCard from './ReadListCard';

const ReadList = ({ sortingType }) => {

    const { storedBooks, setStoredBooks } = useContext(BookContext);

    //  const sortedBooks = [...storedBooks].sort((a, b) => {
    //     if (sortingType === 'pages') return b.totalPages - a.totalPages;
    //     if (sortingType === 'rating') return b.rating - a.rating;
    //     return 0;
    // });

    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'pages') {
                setStoredBooks(prev => [...prev].sort((a, b) => b.totalPages - a.totalPages));
            } else if (sortingType === 'rating') {
                setStoredBooks(prev => [...prev].sort((a, b) => b.rating - a.rating));
            }
        }
    }, [sortingType])




    return (
        <div>
            {
                storedBooks.length === 0 ? (<div className="h-[60vh] flex flex-col items-center justify-center bg-gray-50 rounded-3xl">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-3xl font-bold text-gray-700">No Read Books Yet</h3>
                    <p className="text-gray-500 mt-3 max-w-md text-center">
                        Books you mark as "Read" will appear here.
                    </p>
                </div>)
                    : (storedBooks.map(book => <ReadListCard key={book.bookId} book={book}></ReadListCard>))
            }
        </div>
    );
};

export default ReadList;