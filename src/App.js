import logo from './logo.svg';
import './App.css';

const App = () => {
  var audio =
    'https://github.com/Michael-Obele/Michael-Obele/blob/main/Shaker.mp3?raw=true';
  function play() {
    const sound = document.getElementById('E');
    sound.currentTime = 0;
    sound.play();
  }
  return (
    <div id='drum-machine'>
      <h1>Audio Player</h1>
      <div id='display'>
        <div className='btn drum-pad' onClick={play}>
          <audio className='clip' id='E' src={audio} />
          'E'
        </div>
      </div>
    </div>
  );
}

export default App;
