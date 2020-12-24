import React from 'react';
import './App.css';
import ParticlesBg from './ParticlesBg';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Cards from './Cards/Pages/Cards';
import MainNavigation from './NavigationBar/MainNavigation';
import UploadPage from './FilesUpload/Pages/UploadPage';
import Auth from './SignIN/Pages/Auth';



function App() {
  return (
    <div className="App">
      {/* <ParticlesBg /> */}
      <Router>
      <MainNavigation/>
        <main>
          <Switch>
          <Route path="/" exact>
            <Cards/>
          </Route>
          <Route path="/place/upload" exact>
            <UploadPage/>
          </Route>
          <Route path="/signin" exact>
            <Auth/>
          </Route>
          </Switch>
        </main>      
      </Router>
      

    </div>
  );
}

export default App;
