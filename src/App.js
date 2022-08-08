import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details'

const App = () => {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
          </Routes>
      </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
