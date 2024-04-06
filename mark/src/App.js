import logo from './logo.svg';
import './App.css';
import HikeContainer from './HikeContainer';
// import { BrowseRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1> Mark </h1>
      <HikeContainer
        imageUrl={"https://www.grousemountain.com/media/W1siZiIsIjIwMjMvMDQvMjAvMTYvMTYvNDkvNGFjNzRiYjEtNjNhOC00NDE0LTgyZDUtNmM5MDFmNTJmMmM5L1RyYW1fTW91bnRhaW5fSW1hZ2UtNy5wbmciXSxbInAiLCJ0aHVtYiIsIjk2MHg0NzBcdTAwM2UiXV0?sha=eb89769b72329847"}
        name="Grouse Mountain"
        rating="4.5"
        url = "https://www.grousemountain.com/"/>

      <HikeContainer
        imageUrl={"https://happiestoutdoors.ca/wp-content/uploads/2023/07/MiddleJoffreLakeView.jpg"}
        name="Joffre Lakes"
        rating="4.8"
        url = "https://bcparks.ca/joffre-lakes-park/"/>
    </header>
    </div>

  );
}

export default App;
