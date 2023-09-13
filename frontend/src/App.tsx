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
        <a href="http://localhost:3001/file/download" download>
          Download
        </a>
        <Footer />
      </div>
    </div>
  );
}

export default App;
