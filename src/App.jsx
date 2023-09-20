import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App scroll-smooth">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
