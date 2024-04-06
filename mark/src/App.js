import logo from './logo.svg';
import './App.css';
import HikeContainer from './HikeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Mark </h1>
        <HikeContainer
          imageUrl={"https://www.grousemountain.com/media/W1siZiIsIjIwMjMvMDQvMjAvMTYvMTYvNDkvNGFjNzRiYjEtNjNhOC00NDE0LTgyZDUtNmM5MDFmNTJmMmM5L1RyYW1fTW91bnRhaW5fSW1hZ2UtNy5wbmciXSxbInAiLCJ0aHVtYiIsIjk2MHg0NzBcdTAwM2UiXV0?sha=eb89769b72329847"}
          name="Grouse"
          rating="4.5"/>
      </header>
    </div>
  );
}

export default App;
