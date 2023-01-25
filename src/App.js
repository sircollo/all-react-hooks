import "./App.css";
import UseEffectHook from "./components/UseEffectHook";
import UseImperativeHandleHook from "./components/UseImperativeHandleHook";
import UseLayoutEffectHook from "./components/UseLayoutEffectHook";
import UseReducerHook from "./components/UseReducerHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <UseStateHook/>
      <UseReducerHook/>
      <UseEffectHook/>
      <UseRefHook/>
      <UseLayoutEffectHook/>
      <UseImperativeHandleHook/>
    </div>
  );
}

export default App;
