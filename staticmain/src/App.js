import logo from './logo.svg';
import './App.css';
import Header from './components/Common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullMainScreen from './components/MainScreen/FullMainScreen';
import DetailedCards from './components/MainScreen/DetailedCards';
import ScreenPart from './components/MainScreen/ScreenPart';
import HoverClass from './components/MainScreen/HoverClass';
import VersionFaster from './components/MainScreen/VersionFaster';
import Charges from './components/MainScreen/Charges';
import FAQS from './components/MainScreen/FAQS';
import Experienced from './components/MainScreen/Experienced';


function App() {
  return (
    <div className="App">
      <Header />
      <HoverClass />
      <FullMainScreen />
      <DetailedCards />
      <ScreenPart />
      <VersionFaster />
      <Charges />
      <Experienced />
    </div>
  );
}

export default App;
