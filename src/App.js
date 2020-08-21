import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';

import useForm from 'react-hoo-form';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="email" placeholder="Enter email" name="email" />
        <input type="password" placeholder="Enter password" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
