import React from "react";
import "./App.scss";
import Generator from "./components/QRCode";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Generator />
      <Footer />
    </div>
  );
}

export default App;
