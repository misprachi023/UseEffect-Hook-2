import React from 'react'
import ReactDOM from 'react-dom/client'
import Timer from './Timer'
import './index.css'
function App() {
  
  
  return (
    <>
       
    <div className="App">
      <Timer />
    </div>
  
    </>
      
  );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
