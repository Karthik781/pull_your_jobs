import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from './components/jobs.component'

// const mockData = [
//   {title: "se 1", company: "google"},
//   {title: "se 2", company: "Amazon"}
// ]

const GITHUB_API_URL = "http://localhost:3001/jobs";



function App(){
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch(GITHUB_API_URL)
      .then(res => res.json())
      .then(
        (result) => {
          setJobList(result);
        }
      )
  
  }, [])

  return(
    <div className="App">
      <Jobs jobs = {jobList} />
    </div>
  )
}


export default App;
