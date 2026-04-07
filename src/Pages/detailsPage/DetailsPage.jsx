import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsPageCard from './DetailsPageCard';

const DetailsPage = () => {
    const { bookId } = useParams();

    const books = useLoaderData();
    console.log("all books", books);
    const expectedBook = books.find((book) => book.bookId == bookId);
    console.log('hell', expectedBook);


    return (

     <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-10">
       
        <DetailsPageCard expectedBook={expectedBook}  ></DetailsPageCard> 
        </div>


    );
};

export default DetailsPage;