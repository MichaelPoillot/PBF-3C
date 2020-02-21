import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './hitam.jpg';

function App() {
  return (

    <div class="card col-md-3">
      <img src={gambar} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Kristyan Michael P</h5>
        <p class="card-text">Nim = 1741720070</p>
        <p class="card-text">TI C</p>
        <a href="#" class="btn btn-primary">Like & subkreb</a>
      </div>
    </div>

  );
}

export default App;
