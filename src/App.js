import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
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
