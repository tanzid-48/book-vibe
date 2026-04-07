import React, { useState } from 'react';
import { BookContext } from './BookContext';
import { toast } from 'react-toastify';

const BookProvider = ({children}) => {

 const [storedBooks,setStoredBooks] = useState([]);
 const [wishListBooks,setWishListBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    
  const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId
    );
    if(isExistBook){
        toast.error("This Book already exist in Read List");
    }
    else{
        setStoredBooks([...storedBooks,currentBook])
        toast.success(`${currentBook.bookName} is added to Read list`);
    }
  
  }

  const handleWishListBooks = (currentBook) =>{

    const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId,
);
if(isExistInReadList){
    toast.error("This Book already in Read List");
    return;
}


     const isExistBook = wishListBooks.find((book) => book.bookId === currentBook.bookId
    );
    if(isExistBook){
        toast.error("This Book already exist in Wish List");
    }
    else{
        setWishListBooks([...wishListBooks,currentBook])
        toast.success(`${currentBook.bookName} is added to Wish list`);
    }
    console.log(currentBook,"book");

  }

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishListBooks,
    setWishListBooks,
    handleWishListBooks,
  }

    return  <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
    
};

export default BookProvider;