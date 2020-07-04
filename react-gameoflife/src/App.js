import React from "react";
import GridContainer from "./js/components/GridContainer";
import RulesContainer from "./js/components/RulesContainer";
import Title from "./js/components/Title";
// import About from './components/About'
import "./CSS/App.css";


function App() {
  return (
    <div className="app_container">
      <Title />
      <div className="mid_section_container">
        <GridContainer />
        <RulesContainer />
      </div>
      {/* <About /> */}
    </div>
  );
}

export default App;
