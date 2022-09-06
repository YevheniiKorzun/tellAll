import React from "react";
import { Button, Card } from "react-bootstrap";

export const FeedbackCard: React.FC = () => {
    const date = new Date();
    const dateUTC = date.toUTCString();

    return (
        <div>
            <Card>
            <Card.Header as="h5">
                Featured
                <Card.Title>{dateUTC}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    );
};
