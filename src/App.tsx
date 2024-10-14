import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ChecklistPage from './pages/ChecklistPage/ChecklistPage';
import ResultPage from './pages/ResultPage/ResultPage';
import { AppRoute } from './consts';
import { ChecklistProvider } from './context/ChecklistContext';

function App() {

  return (
    <ChecklistProvider>
      <Router>
        <Routes>
          <Route path={AppRoute.Checklist} element={<ChecklistPage />} />
          <Route path={AppRoute.Result} element={<ResultPage />} />
        </Routes>
      </Router>
    </ChecklistProvider>

  );
}

export default App;
