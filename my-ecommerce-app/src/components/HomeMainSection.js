/*==========================================================================
Name        : HomeMainSection.js
Assignment  : Assignment 4
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/

import React, {useState, useEffect} from 'react';
import reviews from '../data/reviews';
import {Link} from 'react-router-dom';

const HomeMainSection = () => {
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        const randomIndexes = [];
        while (randomIndexes.length < 2) {
            const randomIndex = Math.floor(Math.random() * reviews.length);
            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
            }
        }
        const selectedReviews = randomIndexes.map(ranodmIndex => reviews[ranodmIndex]);
        setUserReviews(selectedReviews);
    }, []);

    return (
        <section>
            <div className="about-us">
                <h2>About Us</h2>
                <p>Welcome to our online store! We are passionate about providing high-quality 
                    products and exceptional customer service. Learn more about our story and 
                    commitment to your satisfaction.</p>
                <Link to="/Productpage">
                    <button>Shop Now</button>
                </Link>
            </div>
            <div className="customer-reviews">
                <h2>Customer Reviews</h2>
                {userReviews.map((review, index) => (
                    <div ket={index} className="review">
                        <div>{review.customerName}</div><br />
                        <div>{review.reviewContent}</div><br />
                        <div>Rating: {Array(review.stars).fill().map((_, i) => <span key={i}>★</span>)}</div><br />
                    </div>
                ))}
            </div>
        </section>
    );
};
export default HomeMainSection;


