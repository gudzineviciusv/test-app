import React, { useState, useEffect } from "react";
import Images from "../images/index.js";
import Header from "../components/Header.js";
import reviewsData from "../API/reviews.json";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [editReviewId, setEditReviewId] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [reviewsPerPage, setReviewsPerPage] = useState(10);

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (
      reviewText.trim() !== "" &&
      name.trim() !== "" &&
      country.trim() !== ""
    ) {
      const newReview = {
        id: new Date().getTime().toString(),
        name: name,
        country: country,
        description: reviewText,
      };
      setReviews([newReview, ...reviews]);
      setReviewText("");
      setName("");
      setCountry("");

    }
  };

  const handleReviewEdit = (id) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    if (reviewToEdit) {
      setEditReviewId(id);
      setReviewText(reviewToEdit.description);
      setName(reviewToEdit.name);
      setCountry(reviewToEdit.country);
    }
  };

  const handleReviewUpdate = () => {
    if (
      reviewText.trim() !== "" &&
      name.trim() !== "" &&
      country.trim() !== ""
    ) {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === editReviewId
            ? {
                ...review,
                name: name,
                country: country,
                description: reviewText,
              }
            : review
        )
      );
      setEditReviewId(null);
      setReviewText("");
      setName("");
      setCountry("");
    }
  };

  const handleReviewDelete = (id) => {
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id)
    );
  };

  const handleFilterChange = (e) => {
    const reviewsPerPage = parseInt(e.target.value);
    setReviewsPerPage(reviewsPerPage);
  };

  useEffect(() => {
      setDisplayedReviews(reviews.slice(0, reviewsPerPage));
  }, [reviews, reviewsPerPage]);

  useEffect(() => {
    setReviews(reviewsData.reviews);
  }, []);

  return (
    <div>
      <Header />
      <h2>Reviews</h2>
      <form onSubmit={editReviewId ? handleReviewUpdate : handleReviewSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          required
        />
        <input
          type="text"
          value={country}
          onChange={handleCountryChange}
          placeholder="Enter your country"
          required
        />
        <textarea
          value={reviewText}
          onChange={handleReviewTextChange}
          placeholder="Write your review..."
          rows={4}
          required
        ></textarea>
        <button type="submit">
          {editReviewId ? "Update Review" : "Submit Review"}
        </button>
      </form>
      <div>
        <label>Reviews per page:</label>
        <select value={reviewsPerPage} onChange={handleFilterChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
      <ul>
        {displayedReviews.map((review) => (
          <li key={review.id}>
            <img src={Images[review.image]} alt="Profile Pic" />
            <p>{review.name}</p>
            <p>{review.country}</p>
            <p>{review.description}</p>
            <button onClick={() => handleReviewEdit(review.id)}>Edit</button>
            <button onClick={() => handleReviewDelete(review.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
