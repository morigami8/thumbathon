import React from 'react';
import './App.css';
import Search from './Features/Search';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Content />
        <Search />
        <div className="footer">footer</div>
      </div>
    </div>
  );
}

export default App;
