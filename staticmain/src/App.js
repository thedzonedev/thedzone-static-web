import logo from './logo.svg';
import './App.css';
import Header from './components/Common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullMainScreen from './components/MainScreen/FullMainScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <FullMainScreen />
    </div>
  );
}

export default App;
