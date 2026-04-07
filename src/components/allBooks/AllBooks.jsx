import React, { use } from 'react';
import AllBooksCard from '../AllBooksCard/AllBooksCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  
    return (
        <div className='my-8 w-10/12 mx-auto'>
            <h3 className='text-4xl font-bold text-center mb-8 '>Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {
                books.map(book => <AllBooksCard key={book.id} book = {book} ></AllBooksCard>)
            }


            </div>
         
        </div>
    );
};

export default AllBooks;