import './App.css';
import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage'
import ProductCard from './components/ProductCard'
import dummyData from './dummyData';

function App() {

  const productCard = dummyData.map(data => {
    return (
      <ProductCard
      key={data.id}
      id={data.id}
      img={data.img}
      title={data.title}
      description={data.description}
      price={data.price}
      rating={data.stats.rating}
      review={data.stats.reviewCount}
      location={data.location}
      openSpots={data.openSpots}
      />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      {productCard}
    </div>
  );
}

export default App;
