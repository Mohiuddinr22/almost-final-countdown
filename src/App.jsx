import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={10}/>
        <TimerChallenge title="Medium" targetTime={5}/>
        <TimerChallenge title="Hard" targetTime={3}/>
        <TimerChallenge title="Legendary" targetTime={1}/>
      </div>
    </>
  );
}

export default App;
