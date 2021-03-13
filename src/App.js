import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contacts'
import Post from './components/Post'
import FullPost from './components/FullPost'



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/post' component={Post} />
            <Route path='/:full_post' component={FullPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };



}

export default App;
