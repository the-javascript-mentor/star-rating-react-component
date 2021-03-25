import { useState } from "react";
import "./App.css";

const Star = ({ onClick, isHighlighted }) => (
  <button onClick={onClick} className={isHighlighted ? "highlighted" : ""}>
    ★
  </button>
);

const StarRatingInput = () => {
  const [stars, setStars] = useState(1);
  console.log(stars);
  return (
    <div className="starRatingInput">
      <Star onClick={() => setStars(1)} isHighlighted={stars >= 1} />
      <Star onClick={() => setStars(2)} isHighlighted={stars >= 2} />
      <Star onClick={() => setStars(3)} isHighlighted={stars >= 3} />
      <Star onClick={() => setStars(4)} isHighlighted={stars >= 4} />
      <Star onClick={() => setStars(5)} isHighlighted={stars >= 5} />
    </div>
  );
};

export default StarRatingInput;
