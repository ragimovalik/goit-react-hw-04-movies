const Reviews = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
