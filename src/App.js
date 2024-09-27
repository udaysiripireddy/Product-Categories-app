import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CategoryList from './components/CategoryList';
import './App.css'; // Optional: import a CSS file for styling

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Categories</h1>
        <CategoryList />
      </div>
    </Provider>
  );
}

export default App;
