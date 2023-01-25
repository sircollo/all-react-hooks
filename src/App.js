import './App.css';
import UseEffectHook from './components/UseEffectHook';
import UseReducerHook from './components/UseReducerHook';
import UseStateHook from './components/UseStateHook';

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <UseStateHook/>
      <UseReducerHook/>
      <UseEffectHook/>
    </div>
  );
}

export default App;
