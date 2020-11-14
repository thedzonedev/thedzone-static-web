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
import Helpform from './components/MainScreen/Helpform';
import Footer from './components/MainScreen/Footer';


function App() {
  return (
    <div className="App" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Header />
      <HoverClass />
      <FullMainScreen />
      <DetailedCards />
      <ScreenPart />
      <VersionFaster />
      <Charges />
      <Experienced />
      <Helpform />
      <Footer />
    </div>
  );
}

export default App;
