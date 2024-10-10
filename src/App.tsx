import './App.css'
import { CharacterList } from './components/CharacterList'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CharacterDetail } from './components/CharacterDetail';
import { useState } from 'react';

function App() {
  const [id, setId] = useState(0)
  return (
          <div style={{backgroundColor:"rgb(211, 255, 206)"}}>
    
      <Router>
      <Routes>
        <Route path="/" element={<CharacterList setId={setId}/>} />
        <Route path="/character" element={<CharacterDetail id={id}/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
