import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './components/Person';


function App() {



  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Person
            firstName = 'Kevin'
            lastName = 'Yu'
            age = {27}
            hairColor = 'Black'
          />
          <Person
            firstName = 'Kevin'
            lastName = 'Yu'
            age = {27}
            hairColor = 'Black'
          />
          <Person
            firstName = 'Kevin'
            lastName = 'Yu'
            age = {27}
            hairColor = 'Black'
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;
