import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Technologies from './pages/Technologies';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/myprojects" element={<MyProjects />} />
      </Routes>

      
    </div>
  );
}

export default App;
