import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../ListBook/ReadList';
import WishList from '../ListBook/WishList';

const ListedBooks = () => {

const [sortingType,setSortingType]  =useState('');
    const { storedBooks, wishListBooks } = useContext(BookContext);
    console.log(storedBooks, wishListBooks,);

    return (

        <div className='w-10/12 mx-auto my-4'>

         <div className="flex justify-center my-4">
             <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
                    <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
                </ul>
            </div>
         </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>

                    <ReadList sortingType = {sortingType}></ReadList>
                </TabPanel>
                <TabPanel>

                    <WishList sortingType = {sortingType}></WishList>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ListedBooks;