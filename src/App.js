import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePageCategories from "./data/HomePageCategories.js";
import Navbar from './components/Navbar';
import Title from './components/Title';
import CardApri from './components/CardApri';
import Footer from "./components/Footer";
import Features from './components/Features';

function App() {
  const totalCakes = HomePageCategories.reduce((accumulator, object) => {
    return accumulator+object.total;
  }, 0 );

  return (
    <div className={"App"}>
      <section className={"colored-section"} id="title">
        <div className={"container-fluid"}>
          <Navbar className="sticky" />
          <Title title={HomePageCategories[0].title} />
          <h5 className='total-cakes'>Per un totale di {totalCakes}</h5>
        </div>
        <Features/>
        
      </section>
      <div className='row cards-section'>
        {HomePageCategories.map((category) => (
          <CardApri
            key={category.id}
            data={category}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
