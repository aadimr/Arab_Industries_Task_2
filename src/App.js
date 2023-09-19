import React from "react";
import "./styles.css";
import HeroSlider from "./components/HeroSlider";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 px-0">
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
