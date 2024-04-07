import './Home.css';
import logo from './assets/homepage.jpg';
import image1 from './assets/homepagebear1.png';
import image2 from './assets/homepagebear2.png';
import image3 from './assets/homepagebear3.png';

function Home() {
  return (
    <div className="container">
      <div className="image-container">
        <div className="overlay-text">Mark Your Adventure.</div>
      </div>

      <h3>I'd like to see...</h3>

      <div className="image-row">
        <img src={image1} alt="Image 1" className="image" />
        <img src={image2} alt="Image 2" className="image" />
        <img src={image3} alt="Image 3" className="image" />
      </div>

    </div>

    

  );
}

export default Home;


