import React from "react";
import CardContainer from "./CardContainer";

import Background from "../../public/img/star.jpeg";

import '../style.scss'

const App = () => {

  return (
    <div className='main-container'>
      <h1>Matching Game</h1>

      <CardContainer />
    </div>
  );
};
export default App;
