/// <reference types="react-scripts" />

type User = {
    name: string;
};

type Feedback = {
    id: string;
    user: User;
    text: string;
    rating: number;
    date: Date;
};
