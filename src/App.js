import logo from "./logo.svg";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Service from "./components/service/Service";
import Project from "./components/project/Project";
import Bettertech from "./components/bettertec/Bettertech";
import Contactus from "./components/contactus/Contactus";
import Bfooter from "./components/bfooter/Bfooter";
import Copyright from "./components/copyright/Copyright";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Service />
      <Project />
      <Bettertech />
      <Contactus />
      <Bfooter />
      <Copyright />
    </div>
  );
}

export default App;
