import React from 'react';
import './App.css';
import Search from './Features/Search';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="ad">ad</div>
        <Search />
        <div className="footer">footer</div>
      </div>
    </div>
  );
}

export default App;
