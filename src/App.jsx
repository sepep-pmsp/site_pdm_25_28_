import './App.css'
import Banner from './components/banner/banner';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='home-app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='banner'>
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default App