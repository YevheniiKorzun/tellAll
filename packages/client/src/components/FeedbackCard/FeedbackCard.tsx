import React from "react";
import { Card } from "react-bootstrap";
import { RatingStars } from "../RatingStars";

type Props = {
    feedback: Feedback;
};

export const FeedbackCard: React.FC<Props> = ({ feedback }) => {
    const { text, rating, user, date } = feedback;
    const dateUTC = date.toUTCString();

    return (
        <div>
            <Card>
            <Card.Header as="h5">
                {user.name}
                <Card.Title>{dateUTC}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                {text}
                </Card.Text>
                <RatingStars readonly={true} rating={rating} />
            </Card.Body>
            </Card>
        </div>
    );
};
