import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from  './components/Contacts'
import Post from './components/Post'



class App extends Component{
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
           <Route exact path='/' component={Home}/>
           <Route path='/contact' component={Contact}/>
           <Route path='/post' component={Post}/>
      </div>
      </BrowserRouter>
    );
  };



}

export default App;
