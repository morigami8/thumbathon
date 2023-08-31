import React from 'react';
import './App.css';
import Search from './Features/Search';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Content />
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default App;
