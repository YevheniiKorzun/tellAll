import React from "react";
import { Rating } from 'react-simple-star-rating'

export const RatingStars: React.FC = () => {
    return (
        <div>
            <Rating ratingValue={0} readonly={true} initialValue={2} />
        </div>
    );
}