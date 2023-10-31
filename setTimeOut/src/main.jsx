import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Timer from './setTime'

function App(){
  return (
    <>
       
    <div className="App">
      <Timer />
    </div>
  
    </>
      
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />

)
