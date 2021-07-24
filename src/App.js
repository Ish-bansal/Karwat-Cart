import React from 'react';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
// import Sign from './components/sign'
// import Faq from './components/Faq'
// import "./App.css"
import Cart from './components/Cart';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import Home from './compnonents/screens/Home'




const Routing = ()=>{

  return(
    <Switch>
      <Route exact path="/" >
         <>
          <NavBar/>
          <Cart/>
          <Footer/>
        </>
      </Route>
     
    </Switch>
  )
}

function App() {
 
  return (
    <BrowserRouter>
    
      <Routing />
      
    </BrowserRouter>
    
  );
}

export default App;
