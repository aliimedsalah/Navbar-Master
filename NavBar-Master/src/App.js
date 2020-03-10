import React from 'react';
import Nav from './components/nav.js';
import './App.css';


const Navmenu = [

  {menu : "About Us"},
  {menu : "Career"},
  {menu : "Department" ,cla : 'drplist', drop : ["Marketing and PR" , "Customer, Success and sales" , "IT, Product, Design, UX and data", "Finance and administration", "HR and more"]},

]

function App() {


  return (
    <div className="App">
   <Nav property={Navmenu}/>
    </div>

  );
}

export default App;
