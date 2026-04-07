import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';


 
const ListedBooks = () => {


    const {storedBooks} = useContext(BookContext);
    console.log(storedBooks,"hello vii.")

    return (

       

        <div>
            <h3>This is listedBooks</h3>

        </div>
    );
};

export default ListedBooks;