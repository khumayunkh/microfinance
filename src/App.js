import './App.css';
import AboutUs from './components/About/About';
import CallCenter from './components/CallCenter/CallCenter';
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
    <CallCenter/>
    </>
  );
}

export default App;
