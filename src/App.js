import { render } from 'react-dom';
import { Header } from './components/header/Header';
import { TopNavBar } from './components/top-nav-bar/TopNavBar';
import { Body } from './components/body/Body';

const App = () => {
  return (
    <div>
      <Header />
      <TopNavBar />
      <Body />
    </div>
  );
};

render(<App />, document.getElementById('root'));
