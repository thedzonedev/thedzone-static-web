import logo from './logo.svg';
import './App.css';
import Header from './components/Common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullMainScreen from './components/MainScreen/FullMainScreen';
import DetailedCards from './components/MainScreen/DetailedCards';
import ScreenPart from './components/MainScreen/ScreenPart';

function App() {
  return (
    <div className="App">
      <Header />
      <FullMainScreen />
      <DetailedCards />
      <ScreenPart />
    </div>
  );
}

export default App;
