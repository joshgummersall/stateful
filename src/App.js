import "./App.css";
import logo from "./logo.svg";
import { ReduxButton } from './ReduxButton';
import { RecoilButton } from './RecoilButton';
import { RecoilText } from './RecoilText';
import { ReduxText } from './ReduxText';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReduxButton text="Redux" />
        <RecoilButton text="Recoil" />
        <RecoilText />
        <ReduxText />
      </header>
    </div>
  );
}

export default App;