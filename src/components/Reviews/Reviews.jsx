import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

const getStoredReviews = () => {
  const storedReviews = localStorage.getItem("reviews");
  return storedReviews ? JSON.parse(storedReviews) : [];
};

const setStoredReviews = (reviews) => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};

const Reviews = () => {
  const [reviews, setReviews] = useState(getStoredReviews);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null);

  useEffect(() => {
    setStoredReviews(reviews);
  }, [reviews]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (editingReviewId !== null) {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === editingReviewId
            ? { ...review, description: reviewText, name: reviewerName }
            : review
        )
      );
      setEditingReviewId(null);
    } else {
      const newReview = {
        id: reviews.length + 1,
        description: reviewText,
        img: [], // Загрузка изображений может потребовать другой логики
        name: reviewerName,
      };
      setReviews([newReview, ...reviews]);
    }

    // Очистить форму после отправки
    setReviewText("");
    setReviewerName("");
  };

  const handleEditReview = (id) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    if (reviewToEdit) {
      setReviewText(reviewToEdit.description);
      setReviewerName(reviewToEdit.name);
      setEditingReviewId(id);
    }
  };

  const handleDeleteReview = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <Form onSubmit={handleReviewSubmit}>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="reviewText">Your Review:</FormLabel>
          <FormControl
            as="textarea"
            id="reviewText"
            placeholder="Enter your review here"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel htmlFor="reviewerName">Your Name:</FormLabel>
          <FormControl
            type="text"
            id="reviewerName"
            placeholder="Enter your name"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" variant="success">
          {editingReviewId !== null ? "Save Changes" : "Submit Review"}
        </Button>
      </Form>

      <div className="row g-4 mt-4">
        {reviews.map((review) => (
          <div key={review.id} className="col-lg-6">
            <Card className="h-100 shadow">
              <CardBody>
                <div className="p-4">
                  <CardText>{review.description}</CardText>
                </div>
              </CardBody>
              <CardFooter className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={review.img}
                    className="img-fluid rounded-circle mx-3 shadow"
                    alt=""
                  />
                  <CardTitle className="text-success">{review.name}</CardTitle>
                </div>
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditReview(review.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteReview(review.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
