import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from 'npm_component';

function App() {
  return (
    <div className="App">
      <MyComponent text={"Test Text"} size={5} />
    </div>
  );
}

export default App;
