import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../ListBook/ReadList';
import WishList from '../ListBook/WishList';


const ListedBooks = () => {

    const { storedBooks, wishListBooks } = useContext(BookContext);
    console.log(storedBooks, wishListBooks,);

    return (

        <div className='w-10/12 mx-auto my-4'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>

                <ReadList></ReadList>
                </TabPanel>
                <TabPanel>

                <WishList></WishList>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ListedBooks;