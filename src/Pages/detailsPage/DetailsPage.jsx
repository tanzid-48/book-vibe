import React from 'react';
import { useParams } from 'react-router';

const DetailsPage = () => {
    const {bookId} = useParams();
    
    return (
        <div>
  <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-10">
            <h3 className="text-3xl font-bold">
                Details Page
            </h3>

            <p className="mt-4 text-lg">
                Book ID: {bookId}
            </p>
        </div>
        
        </div>
    );
};

export default DetailsPage;