import React from "react";
//import Article from "./components/Article";
import Footer from "./components/Footer";
//import Headers from "./components/Headers";
//import ListClient from "./components/ListClient";
import NavbarComponent from "./components/Navbar";
import RoutesApp from "./routes";

/*
function App() {
  return (
    <div>
      john
    </div>
  );
} */

class App extends React.Component {

  render() {
    return (
      <>
        <NavbarComponent />
        <RoutesApp />
        <Footer />
      </>
    );
  }
}

export default App;
