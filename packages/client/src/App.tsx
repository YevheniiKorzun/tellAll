import './App.css';
import { FeedbacksList } from './components/FeedbacksList';

const feedbacks = [
  {
    id: '1',
    user: {
      name: 'John',
    },
    text: 'first feedback',
    rating: 2,
    date: new Date(10000),
  },
  {
    id: '2',
    user: {
      name: 'Mark',
    },
    text: 'second feedback',
    rating: 4,
    date: new Date(2000000),
  },
];

function App() {
  return (
    <FeedbacksList feedbacks={feedbacks} />
  );
}

export default App;
