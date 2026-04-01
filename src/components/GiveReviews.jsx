import React, { useState } from "react";

function GiveReviews() {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <h4>Thank you for your review!</h4>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Give a Review</h3>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Review:</label>
        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Rating:</label>
        <select name="rating" value={formData.rating} onChange={handleChange}>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default GiveReviews;
