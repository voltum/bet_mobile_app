import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import bg_left from './img/bg_left_02.png';
import bg_right from './img/bg_right_03.png';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <img src={bg_left} className="bg_left"></img>
      <img src={bg_right} className="bg_right"></img>
    </div>
  );
}

export default App;
