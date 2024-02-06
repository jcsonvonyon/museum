import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landing";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const App = () => {
  return (
    <Router>
       <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/section1' element={<Section1/>} />
        <Route exact path='/section2' element={<Section2/>} />
        <Route exact path='/section3' element={<Section3/>} />
       </Routes>
       
    </Router>
  );
}

export default App;
