import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Restuarantlist from './components/Restuarantlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Viewrestaurant from './components/Viewrestaurant'


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header />
        {/* <h4>Restuarant Application</h4> */}
        <Routes>
          <Route path="/" element={<Restuarantlist />}/>
          <Route path='/viewrestaurant/:id' element={<Viewrestaurant/>}/>
        </Routes>
        <Footer />
      </header>
      </Router>
    </div>
  );
}

export default App;
