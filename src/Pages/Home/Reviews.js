import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);


useEffect(()=>{

fetch('https://intense-inlet-37114.herokuapp.com/reviews')
.then(res=>res.json()).then(data=>setReviews(data))


},[])


    return (
        <div className='mt-16'>
            <h3  className='text-primary text-xl font-bold text-center'>CUSTOMER REVIEWS</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-12 justify-center'>
                {
                 reviews.map(review=><Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;