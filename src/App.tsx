import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
