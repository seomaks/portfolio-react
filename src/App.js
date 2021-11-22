import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import RemoteWork from "./remote/RemoteWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <RemoteWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
