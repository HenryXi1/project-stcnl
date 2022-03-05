import React from 'react';
import ReactDOM from 'react-dom';
import Submission from './Submission';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home'


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/submission" element={<Submission/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);