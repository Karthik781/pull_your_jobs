import React from 'react';
import './App.css';
import Jobs from './components/jobs.component'

const mockData = [
  {title: "se 1", company: "google"},
  {title: "se 2", company: "Amazon"}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockData}/>
    </div>
  );
}

export default App;