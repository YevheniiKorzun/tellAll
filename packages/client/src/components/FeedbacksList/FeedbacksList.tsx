import React from "react";
import { FeedbackCard } from "../FeedbackCard";

type Props = {
    feedbacks: Feedback[];
};

export const FeedbacksList: React.FC<Props> = ({ feedbacks }) => {
    return (
        <div>
            {feedbacks.map(feedback => (
                <li key={feedback.id}>
                    <FeedbackCard feedback={feedback} />
                </li>
            ))}
        </div>
    );
};