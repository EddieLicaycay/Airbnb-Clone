import './App.css';
import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage'
import ProductCard from './components/ProductCard'



function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <ProductCard />
    </div>
  );
}

export default App;
