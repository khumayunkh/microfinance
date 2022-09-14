import './App.css';
import AboutUs from './components/About/About';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import InfoTime from './components/InformationAboutTime/InfoAboutTime';
import LoanTerm from './components/LoanTerm/LoanTerm';
import Location from './components/Location/Location';
import Login from './components/Login/Login';
import Terms from './components/Terms/Terms';

function App() {
  return (
    <>
    <Header/>
    <AboutUs/>
    <Information/>
    <Terms/>
    <Login/>
    <InfoTime/>
    <LoanTerm/>
    <Location/>
    </>
  );
}

export default App;
