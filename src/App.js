import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './styles/App.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </HashRouter>
  );
}

export default App;
