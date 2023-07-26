import "./App.css";
import Formc from "./components/Form";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from "./Routes/Users";
import Posts from './Routes/Todos';
import Item from "./components/Item";

function App() {


  return (
    <Routes>
        
         <Route path="user" element={<Users/>} />
         <Route path ="posts" element={<Posts />} />
          <Route path="*" element={<h1>Route does not 
            exist</h1>}/>
      </Routes>
  );
}

export default App;
