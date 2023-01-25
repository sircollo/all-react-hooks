import "./App.css";
import UseContextHook from "./components/UseContextHook";
import UseEffectHook from "./components/UseEffectHook";
import UseImperativeHandleHook from "./components/UseImperativeHandleHook";
import UseLayoutEffectHook from "./components/UseLayoutEffectHook";
import UseMemoHook from "./components/UseMemoHook";
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
      <UseContextHook/>
      <UseMemoHook/>
    </div>
  );
}

export default App;
