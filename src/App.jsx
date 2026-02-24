import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import DefaultLayout from './layouts/DefaultLayout';

import { BudgetProvider } from './contexts/BudgetContext';

function App() {
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  );
}

export default App;
