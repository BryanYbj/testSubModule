
import './App.css';
import { say } from '../subModuleSon/say'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{say('Hello')}}>点击say</button>
      </header>
    </div>
  );
}

export default App;
