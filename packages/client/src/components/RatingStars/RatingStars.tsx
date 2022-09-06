import React from "react";
import { Rating } from 'react-simple-star-rating';

type Props = {
    readonly: boolean;
    rating: number;
};

export const RatingStars: React.FC<Props> = ({ readonly, rating }) => {
    return (
        <div>
            <Rating ratingValue={0} readonly={readonly} initialValue={rating} />
        </div>
    );
}