import './App.css';
import { connect } from 'react-redux';

import ToDoForm from './components/ToDoForm';

// Create our connected list... this is just a list component
// that is connected to the Redux store.
const select = state => { return { articles: state.articles } };
const ConnectedList = (props) => (
  <ul>
    { props.articles.map(el => (
    <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(select)(ConnectedList);

function App() {
  return (
    <div className="App">
      <h1>Today's To-Do List</h1>
      <h3>Submit an item</h3>
      <ToDoForm />
      <List />
    </div>
  );
}

export default App;