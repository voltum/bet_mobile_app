import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import bg_left from './img/bg_left_03.png';
import bg_right from './img/bg_right_04.png';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <a href="/download/RajBet.apk" className="main_btn overlay" download>
        <Header />
        <Content />
        <img src={bg_left} className="bg_left"></img>
        <img src={bg_right} className="bg_right"></img>
      </a>
    </div>
  );
}

export default App;
