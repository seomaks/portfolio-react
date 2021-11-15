import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import RemoteWork from "./remote/RemoteWork";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <RemoteWork />
    </div>
  );
}

export default App;
