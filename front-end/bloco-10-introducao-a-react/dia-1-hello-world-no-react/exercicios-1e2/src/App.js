import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Solar System Project', 'Project Tryunfo', 'Project TrybeTunes', 'Frontend Online Store Project']

function App() {
  return (
    <div className="App">
      <ul>{compromissos.map((tarefa) => Task(tarefa))}</ul>
    </div>
  );
}

export default App;
